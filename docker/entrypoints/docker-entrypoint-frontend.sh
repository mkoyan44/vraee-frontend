#!/bin/bash
set -e

die() {
    printf '\033[1;31mERROR:\033[0m %s\n' "$@" >&2
    exit 1
}

einfo() {
    printf '\n\033[1;36m> %s\033[0m\n' "$@" >&2
}

ewarn() {
    printf '\033[1;33mWARNING:\033[0m %s\n' "$@" >&2
}

if [ "${REPLACE_ENV_VARIABLES:-false}" = "true" ]; then
    einfo "Replacing environment variables in frontend files"
fi

if [ "$#" -eq 0 ]; then
    einfo "No command provided; defaulting to 'npm start'"
    exec npm start
else
    exec "$@"
fi