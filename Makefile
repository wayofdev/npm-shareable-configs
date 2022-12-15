-include .env

# BuildKit enables higher performance docker builds and caching possibility
# to decrease build times and increase productivity for free.
export DOCKER_BUILDKIT ?= 1

# Binary to use, when executing docker-compose tasks
DOCKER ?= docker
DOCKER_COMPOSE ?= docker-compose

# Support image with all needed binaries, like envsubst, mkcert, wait4x
SUPPORT_IMAGE ?= wayofdev/build-deps:alpine-latest

BUILDER_PARAMS ?= docker run --rm -i -v $(shell pwd):/home/wod

BUILDER ?= $(BUILDER_PARAMS) $(SUPPORT_IMAGE)
NPM_BIN ?= pnpm


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
install:
	$(NPM_BIN) install
.PHONY: install

update:
	$(NPM_BIN) update
.PHONY: update

build:
	$(NPM_BIN) run build
.PHONY: build

purge:
	rm -rf .pnpm-store node_modules **/node_modules pnpm-lock.yaml
.PHONY: purge

login:
	pnpm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
.PHONY: login


# Testing and Code Quality
# ------------------------------------------------------------------------------------
lint: ## Run eslint task
	$(NPM_BIN) run lint
.PHONY: lint

lint-staged:
	$(NPM_BIN) run lint-staged
.PHONY: lint-staged

commitlint:
	$(NPM_BIN) run --no-install commitlint --edit "${1}"
.PHONY: commitlint

test: ## Run unit tests
	$(NPM_BIN) run test
.PHONY: test

format: ## Run prettier formatting
	$(NPM_BIN) run format
.PHONY: format

ylint: ## Lints yaml files inside project
	yamllint .
.PHONY: ylint

actionlint: ## Lint github actions using actionlint
	$(BUILDER) actionlint -color
.PHONY: actionlint


# Git Actions
# ------------------------------------------------------------------------------------
hooks: ## Install git hooks from husky
	$(NPM_BIN) run prepare
.PHONY: hooks


# Docker Actions
# --------------
ssh:
	$(DOCKER_COMPOSE) run --rm -it app sh
.PHONY: ssh
