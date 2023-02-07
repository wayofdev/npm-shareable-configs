-include .env

# BuildKit enables higher performance docker builds and caching possibility
# to decrease build times and increase productivity for free.
export DOCKER_BUILDKIT ?= 1
export COMPOSE_DOCKER_CLI_BUILD ?= 1

# https://github.com/vercel/turbo/issues/223
export FORCE_COLOR ?= 1

# Binary to use, when executing docker-compose tasks
DOCKER ?= docker
DOCKER_COMPOSE ?= docker-compose

# Support image with all needed binaries, like envsubst, mkcert, wait4x
SUPPORT_IMAGE ?= wayofdev/build-deps:alpine-latest

BUILDER_PARAMS ?= docker run --rm -i -v $(shell pwd):/home/wod

BUILDER ?= $(BUILDER_PARAMS) $(SUPPORT_IMAGE)
NPM_BIN ?= pnpm
NPX_BIN ?= npx

# Self documenting Makefile code
# ------------------------------------------------------------------------------------
ifneq ($(TERM),)
	BLACK := $(shell tput setaf 0)
	RED := $(shell tput setaf 1)
	GREEN := $(shell tput setaf 2)
	YELLOW := $(shell tput setaf 3)
	LIGHTPURPLE := $(shell tput setaf 4)
	PURPLE := $(shell tput setaf 5)
	BLUE := $(shell tput setaf 6)
	WHITE := $(shell tput setaf 7)
	RST := $(shell tput sgr0)
else
	BLACK := ""
	RED := ""
	GREEN := ""
	YELLOW := ""
	LIGHTPURPLE := ""
	PURPLE := ""
	BLUE := ""
	WHITE := ""
	RST := ""
endif
MAKE_LOGFILE = /tmp/npm-shareable-configs.log
MAKE_CMD_COLOR := $(BLUE)

default: all

help: ## Show this menu
	@echo 'Management commands for package:'
	@echo 'Usage:'
	@echo '    ${MAKE_CMD_COLOR}make${RST}                       Prepares and spins up project with default settings'
	@grep -E '^[a-zA-Z_0-9%-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "    ${MAKE_CMD_COLOR}make %-21s${RST} %s\n", $$1, $$2}'
	@echo
	@echo '    📑 Logs are stored in      $(MAKE_LOGFILE)'
	@echo
	@echo '    📦 Package                 npm-shareable-configs (github.com/wayofdev/npm-shareable-configs)'
	@echo '    🤠 Author                  Andrij Orlenko (github.com/lotyp)'
	@echo '    🏢 ${YELLOW}Org                     wayofdev (github.com/wayofdev)${RST}'
.PHONY: help

.EXPORT_ALL_VARIABLES:


# Default action
# Defines default command when `make` is executed without additional parameters
# ------------------------------------------------------------------------------------
all: install hooks
.PHONY: all


# System Actions
# ------------------------------------------------------------------------------------
i: ## Install dependencies
	$(NPM_BIN) i
.PHONY: i

install: i ## Same as `make i`
.PHONY: install

update: ## Run pnpm to packages to their latest version based on the specified range
	$(NPM_RUNNER) update
.PHONY: update

build: ## Build all packages inside monorepo
	$(NPM_RUNNER) run build
.PHONY: build

purge: ## Deletes node modules and temporary files
	rm -rf .pnpm-store node_modules && \
	rm -rf **/node_modules pnpm-lock.yaml **/.turbo **/.next
.PHONY: purge

deps-check: ## Check for outdated dependencies
	$(NPM_BIN) run deps:check
.PHONY: deps-check

deps-update: ## Check for outdated dependencies and automatically update them using pnpm
	$(NPM_BIN) run deps:update
.PHONY: deps-update

login:
	$(NPM_BIN) config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
.PHONY: login


# Testing and Code Quality
# ------------------------------------------------------------------------------------
lint: ## Run eslint task
	$(NPM_BIN) run lint
.PHONY: lint

lint-staged:
	$(NPM_BIN) run lint-staged
.PHONY: lint-staged

lint-commits:
	$(NPM_BIN) commitlint --edit "$(1)"
.PHONY: lint-commits

lint-md: ## Lint markdown files
	$(NPM_BIN) lint:md
.PHONY: lint-md

lint-dist:
	$(NPM_BIN) lint:dist
.PHONY: lint-dist

lint-html: ## Lint html files
	$(NPM_BIN) lint:html
.PHONY: lint-html

lint-css: ## Lint css files
	$(NPM_BIN) lint:css
.PHONY: lint-css

lint-secrets: ## Check if there are any missed secret credentials in code
	$(NPM_BIN) lint:secrets
.PHONY: lint-secrets

lint-yaml: ## Lints yaml files inside project
	yamllint .
.PHONY: lint-yaml

lint-actions: ## Lint github actions using actionlint
	$(BUILDER) actionlint -color
.PHONY: lint-actions

test: ## Run unit tests
	$(NPM_BIN) test
.PHONY: test

format: ## Run prettier formatting
	$(NPM_BIN) run format
.PHONY: format

sort: ## Sort package.json across project
	$(NPM_BIN) lint:package-json
.PHONY: sort


# Release
# ------------------------------------------------------------------------------------
cs: ## Run changeset to generate changelog
	$(NPM_BIN) changeset
.PHONY: cs

cs-version:
	$(NPM_BIN) changeset version
.PHONY: version

cs-release: ## Publish new version to npm
	$(NPM_BIN) changeset publish
.PHONY: release


# Git Actions
# ------------------------------------------------------------------------------------
hooks: ## Install git hooks from husky
	$(NPM_BIN) run prepare
.PHONY: hooks
