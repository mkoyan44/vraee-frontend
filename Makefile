# Frontend - Container Management
# Usage: make run TARGET_ARCH=amd64

REPO_ROOT := $(shell git rev-parse --show-toplevel)
.NOTPARALLEL:
SHELL := /bin/bash

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

# Project
PROJECT := render-agency-frontend
NETWORK := render-network

# Image
FRONTEND_IMAGE := $(PROJECT)

# Backend URL (can be overridden)
ifndef BACKEND_URL
  BACKEND_URL := http://localhost:4000
endif

# Colors
RESET := \033[0m
GREEN := \033[32m
BLUE := \033[34m

.PHONY: help vars network build up down run ps logs clean

help:
	@echo "$(BLUE)Render Agency - Frontend$(RESET)"
	@echo ""
	@echo "make run TARGET_ARCH=amd64                        - Clean, build, start"
	@echo "make build TARGET_ARCH=amd64                      - Build image"
	@echo "make up                                           - Start container"
	@echo "make up BACKEND_URL=http://backend-host:4000      - Start with custom backend URL"
	@echo "make down                                         - Stop container"
	@echo "make ps                                           - Show status"
	@echo "make logs                                         - Show logs"
	@echo "make clean                                        - Remove everything"

vars:
	@echo "$(BLUE)>>> TARGET_ARCH=$(TARGET_ARCH)$(RESET)"
	@echo "$(BLUE)>>> BACKEND_URL=$(BACKEND_URL)$(RESET)"

network:
	@nerdctl network create $(NETWORK) 2>/dev/null || true

# Build
build: vars network
	@echo "$(BLUE)>>> Building frontend...$(RESET)"
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

# Status
ps:
	@echo "$(BLUE)Frontend Container:$(RESET)"
	@nerdctl ps --filter name=$(PROJECT)

logs:
	@nerdctl logs -f $(PROJECT)

# Cleanup
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