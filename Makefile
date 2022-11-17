SHELL := /bin/bash
isDocker := $(shell docker info > /dev/null 2>&1 && echo 1)
python:=python3
venv:=.venv/bin/activate
source:=source
sy := php bin/console

ifeq ($(OS),Windows_NT)
python:=python
venv:=".venv/Scripts/activate"
source:=
SHELL:=cmd
endif


.DEFAULT_GOAL := help
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


# Generate ssh key for ansible
.PHONY: generate-ssh-key
user?=
ip?=
generate-ssh-key:
	ssh-keygen -t ed25519 -f ~/.ssh/id_ansible -N ''
	ssh-copy-id -i ~/.ssh/id_ansible $(user)@$(ip)


# ============================
# Docker commands
# ============================

# Mounts project database from docker
.PHONY: postgres-docker
postgres-docker:
	docker-compose up -d


# ============================
# App commands
# ============================


# ============================
# Dev server
# ============================
.PHONY: dev
dev:
	@pnpm -r dev

# ============================
# Deployment
# ============================

## install ansible
.PHONY: ansible-install
ansible-install:
	$(python) -m venv .venv
	$(source) $(venv) && pip install --upgrade pip
	$(source) $(venv) && pip install ansible

# install ansible from pipeline
.PHONY: ansible-install-cd
ansible-install-cd:
	pip install --upgrade pip
	pip install ansible


tags?=
ifndef tags
 TAGSD=
else
 TAGSD=--tags $(tags)
endif

limits?=
ifndef limits
 LIMITSD=
else
 LIMITSD=--limit '$(limits)'
endif
.PHONY: ansible-playbook
ansible-playbook:
	ansible-playbook --vault-password-file .vault_pass -i ansible/hosts.yml ansible/install.yml $(TAGSD) $(LIMITSD)


## Provision (deploy)
.PHONY: provision
branch?=main
provision: .venv/bin/ansible
	$(source) $(venv) && make ansible-playbook


## provision (deploy from pipeline)
.PHONY: provision-cd
provision-cd:
	make ansible-playbook


# ============================
# Ansible commands
# ============================

# Ansible galaxy command (Used to generate ansible roles)
.PHONY: ansible-galaxy
role?=
ansible-role: .venv/bin/ansible
	$(source) $(venv) && ansible-galaxy init ansible/roles/$(role)


.PHONY: vault-gen
text?=
vault-gen:
	$(source) $(venv) && \
	ansible-vault encrypt_string --vault-password-file .vault_pass $(text)