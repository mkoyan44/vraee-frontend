# Render Agency - Combined Makefile
# Frontend Container Management + Deployment Pipeline

# Project Configuration
PROJECT_NAME := $(shell git rev-parse --show-toplevel | awk -F/ '{print $$NF}')
BRANCH_NAME := $(shell git rev-parse --abbrev-ref HEAD)
REPO_ROOT := $(shell git rev-parse --show-toplevel)
CODE_BASE_PATH ?= ${REPO_ROOT}
NAMESPACE ?= ${PROJECT_NAME}

.NOTPARALLEL:
SHELL := /bin/bash
.EXPORT_ALL_VARIABLES:

# CI Detection
ifeq ($(CI),true)
    SUDO := sudo
else
    SUDO :=
endif

# Architecture
ifndef TARGET_ARCH
  TARGET_ARCH := amd64
endif

# Frontend Project Settings
PROJECT := render-agency-frontend
NETWORK := render-network
FRONTEND_IMAGE := $(PROJECT)

# Backend URL (can be overridden)
ifndef BACKEND_URL
  BACKEND_URL := http://localhost:4000
endif

# Environment Files
ENV_FILE := ${REPO_ROOT}/.env
CONFIG_FILE := ${REPO_ROOT}/config.json
PACKAGE_JSON := ${REPO_ROOT}/package.json

# Check if .env file exists and is not empty
ifeq (,$(wildcard $(ENV_FILE)))
	$(error ".env file not found at $(ENV_FILE)")
endif
ifeq ($(shell test -s $(ENV_FILE) && echo non-empty || echo empty), empty)
	$(error ".env file is empty at $(ENV_FILE)")
endif

include $(ENV_FILE)
export $(shell sed 's/=.*//' $(ENV_FILE))

# Validate critical variables
CRITICAL_VARS := GH_TOKEN GH_OWNER
$(foreach var,$(CRITICAL_VARS),\
	$(if $(filter undefined,$(origin $(var))),\
		$(error "Critical variable $(var) is not set"),))
$(foreach var,$(CRITICAL_VARS),\
	$(if $(shell [ -z "$($(var))" ] && echo empty),\
		$(error "Critical variable $(var) is empty"),))

# Validate architecture
ifeq ($(filter $(TARGET_ARCH),arm64 amd64),)
    $(error "Invalid TARGET_ARCH value: $(TARGET_ARCH). Must be one of arm64,amd64.")
endif

export GH_REPO
export TARGET_ARCH

# Registry Configuration
REGISTRY_FQDN := ghcr.io
COMPOSED_BUILD_ARGS := --build-arg TARGET_ARCH=$(TARGET_ARCH)
WEB_IMAGE_NAME := ${REGISTRY_FQDN}/mkoyan44/console-${TARGET_ARCH}
WEB_IMAGE_TAG := $(if $(VERSION),$(VERSION),latest)

# Colors
RESET := \033[0m
GREEN := \033[32m
BLUE := \033[34m
YELLOW := \033[33m

# =============================================================================
# HELP & INFO
# =============================================================================

.PHONY: help vars
help:
	@echo "$(BLUE)===============================================$(RESET)"
	@echo "$(BLUE)Render Agency - Combined Makefile$(RESET)"
	@echo "$(BLUE)===============================================$(RESET)"
	@echo ""
	@echo "$(YELLOW)Frontend Container Management:$(RESET)"
	@echo "  make run TARGET_ARCH=amd64                    - Clean, build, start frontend"
	@echo "  make build TARGET_ARCH=amd64                  - Build frontend image"
	@echo "  make up                                       - Start frontend container"
	@echo "  make up BACKEND_URL=http://backend:4000       - Start with custom backend"
	@echo "  make down                                     - Stop frontend container"
	@echo "  make ps                                       - Show container status"
	@echo "  make logs                                     - Show container logs"
	@echo "  make clean                                    - Remove frontend container & image"
	@echo ""
	@echo "$(YELLOW)Development:$(RESET)"
	@echo "  make dev                                      - Start in development mode"
	@echo "  make install                                  - Install npm dependencies"
	@echo ""
	@echo "$(YELLOW)Deployment Pipeline:$(RESET)"
	@echo "  make web-build                                - Build and push web image"
	@echo "  make web-apply                                - Apply Kubernetes manifests"
	@echo "  make web                                      - Full deployment (build + apply)"
	@echo "  make set-version V=1.0.0                      - Update package.json version"
	@echo ""
	@echo "$(YELLOW)Registry & Authentication:$(RESET)"
	@echo "  make gh                                       - Login to GitHub registry"
	@echo "  make clone-de-repo                            - Clone deployment repository"
	@echo ""
	@echo "$(YELLOW)Web Image Management:$(RESET)"
	@echo "  make nerdctl-web-build                        - Build web image with nerdctl"
	@echo "  make nerdctl-web-push                         - Push web image with nerdctl"
	@echo "  make sudo-web-build                           - Build web image with sudo nerdctl"
	@echo "  make sudo-web-push                            - Push web image with sudo nerdctl"
	@echo ""

vars:
	@echo "$(BLUE)>>> Configuration Variables$(RESET)"
	@echo "TARGET_ARCH     = $(TARGET_ARCH)"
	@echo "BACKEND_URL     = $(BACKEND_URL)"
	@echo "NAMESPACE       = $(NAMESPACE)"
	@echo "PROJECT_NAME    = $(PROJECT_NAME)"
	@echo "BRANCH_NAME     = $(BRANCH_NAME)"
	@echo "REPO_ROOT       = $(REPO_ROOT)"
	@echo "REGISTRY_FQDN   = $(REGISTRY_FQDN)"
	@echo "WEB_IMAGE_NAME  = $(WEB_IMAGE_NAME)"
	@echo "WEB_IMAGE_TAG   = $(WEB_IMAGE_TAG)"

# =============================================================================
# VERSION MANAGEMENT
# =============================================================================

.PHONY: set-version
set-version:
	$(eval ACTUAL_VERSION := $(if $(V),$(V),$(if $(VERSION),$(VERSION),latest)))
	@echo "$(BLUE)>>> Updating package.json version to $(ACTUAL_VERSION)$(RESET)"
	@sed -i.bak 's/"version": *"[^"]*"/"version": "$(ACTUAL_VERSION)"/' $(PACKAGE_JSON)
	@echo "$(GREEN)✓ Version updated to $(ACTUAL_VERSION)$(RESET)"
	@rm -f $(PACKAGE_JSON).bak

# =============================================================================
# DEPLOYMENT REPOSITORY
# =============================================================================

.PHONY: clone-de-repo gh-login gh
clone-de-repo:
	@echo "$(BLUE)>>> Cloning deployment repository...$(RESET)"
	cd ${REPO_ROOT}/.git/ && \
	git clone git@github.com:mkoyan44/4lock-de.git || true && \
	cd ${REPO_ROOT}/.git/4lock-de/ && \
	git fetch --all --tags && \
	git checkout -f main && \
	git pull -f -X theirs && \
	cd ${REPO_ROOT}
	@echo "$(GREEN)✓ Deployment repository ready$(RESET)"

gh-login:
	@echo "$(BLUE)>>> Logging into GitHub registry...$(RESET)"
	cd ${REPO_ROOT}/.git/4lock-de/ && \
	cp ${REPO_ROOT}/.env . && \
	make -f makefiles/Makefile.k8s gh-login \
		REGISTRY_FQDN="${REGISTRY_FQDN}" \
		REPO_ROOT="${REPO_ROOT}"
	@echo "$(GREEN)✓ Logged in$(RESET)"

gh: clone-de-repo gh-login

# =============================================================================
# FRONTEND CONTAINER MANAGEMENT
# =============================================================================

.PHONY: network build up down run ps logs clean
network:
	@echo "$(BLUE)>>> Creating network...$(RESET)"
	@nerdctl network create $(NETWORK) 2>/dev/null || true
	@echo "$(GREEN)✓ Network ready$(RESET)"

build: vars network
	@echo "$(BLUE)>>> Building frontend container...$(RESET)"
	@nerdctl build --build-arg TARGET_ARCH=$(TARGET_ARCH) \
	   -t $(FRONTEND_IMAGE):latest \
	   -f docker/dockerfiles/Dockerfile.frontend \
	   .
	@echo "$(GREEN)✓ Frontend built$(RESET)"

# Run
up:
	@echo "$(BLUE)>>> Starting frontend container...$(RESET)"
	@nerdctl run -d --name $(PROJECT) \
	   --network $(NETWORK) \
	   -p 3000:3000 \
	   -e NODE_ENV=production \
	   -e REACT_APP_API_URL=$(BACKEND_URL) \
	   --restart unless-stopped \
	   $(FRONTEND_IMAGE):latest 2>/dev/null || true
	@echo "$(GREEN)✓ Frontend started$(RESET)"
	@echo ""
	@echo "Frontend: http://localhost:3000"
	@echo "Backend:  $(BACKEND_URL)"

down:
	@echo "$(BLUE)>>> Stopping frontend container...$(RESET)"
	@nerdctl stop $(PROJECT) 2>/dev/null || true
	@nerdctl rm $(PROJECT) 2>/dev/null || true
	@echo "$(GREEN)✓ Stopped$(RESET)"

# Main workflow
run: clean build up

ps:
	@echo "$(BLUE)Frontend Container:$(RESET)"
	@nerdctl ps --filter name=$(PROJECT)

logs:
	@nerdctl logs -f $(PROJECT)

clean: down
	@echo "$(BLUE)>>> Cleaning frontend...$(RESET)"
	@nerdctl rmi $(FRONTEND_IMAGE):latest -f 2>/dev/null || true
	@echo "$(GREEN)✓ Clean$(RESET)"

# Development helpers
dev:
	@echo "$(BLUE)>>> Starting frontend in development mode...$(RESET)"
	@npm run dev

install:
	@echo "$(BLUE)>>> Installing dependencies...$(RESET)"
	@npm install
	@echo "$(GREEN)✓ Dependencies installed$(RESET)"

# =============================================================================
# WEB IMAGE BUILD & PUSH
# =============================================================================

.PHONY: nerdctl-web-build nerdctl-web-push sudo-web-build sudo-web-push
nerdctl-web-build: set-version
	@echo "$(BLUE)>>> Building web image...$(RESET)"
	nerdctl build -f docker/dockerfiles/Dockerfile.frontend $(COMPOSED_BUILD_ARGS) -t ${WEB_IMAGE_NAME}:${WEB_IMAGE_TAG} .
	@echo "$(GREEN)✓ Web image built$(RESET)"

nerdctl-web-push:
	@echo "$(BLUE)>>> Pushing web image...$(RESET)"
	nerdctl push ${WEB_IMAGE_NAME}:${WEB_IMAGE_TAG}
	@echo "$(GREEN)✓ Web image pushed$(RESET)"

sudo-web-build: set-version
	@echo "$(BLUE)>>> Building web image (sudo)...$(RESET)"
	sudo nerdctl build -f docker/dockerfiles/Dockerfile.frontend $(COMPOSED_BUILD_ARGS) -t ${WEB_IMAGE_NAME}:${WEB_IMAGE_TAG} .
	@echo "$(GREEN)✓ Web image built$(RESET)"

sudo-web-push:
	@echo "$(BLUE)>>> Pushing web image (sudo)...$(RESET)"
	sudo nerdctl push ${WEB_IMAGE_NAME}:${WEB_IMAGE_TAG}
	@echo "$(GREEN)✓ Web image pushed$(RESET)"

# =============================================================================
# KUBERNETES DEPLOYMENT
# =============================================================================

.PHONY: j2m-apply-web web-apply web-build web
j2m-apply-web:
	@echo "$(BLUE)>>> Applying Kubernetes manifests...$(RESET)"
	cd ${REPO_ROOT}/.git/4lock-de/ && \
	cp ${REPO_ROOT}/.env . && \
	make -f makefiles/Makefile.k8s j2-apply \
		REGISTRY_FQDN="${REGISTRY_FQDN}" \
		J2_APP="web" \
		RENDERED_DIR="${REPO_ROOT}/j2mization" \
		NAMESPACE="${NAMESPACE}" \
		ACTION="apply" \
		REPO_ROOT="${REPO_ROOT}"
	@echo "$(GREEN)✓ Manifests applied$(RESET)"

web-apply: clone-de-repo j2m-apply-web

web-build: nerdctl-web-build gh nerdctl-web-push

web: web-build web-apply
	@echo "$(GREEN)✓ Full web deployment complete$(RESET)"