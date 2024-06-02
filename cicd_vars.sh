#!/usr/bin/env bash

# CI

set -u
: "${CI_REPOSITORY_URL}"

# ANSIBLE

set -u
: "${ANSIBLE_SERVER_HOST}"

set -u
: "${ANSIBLE_SERVER_USER}"

set -u
: "${ANSIBLE_DEPLOY_KEY}"

set -u
: "${ANSIBLE_VAULT_PASS}"

# DOMAIN

set -u
: "${SITE_DOMAIN}"

set -u
: "${CMS_DOMAIN}"

echo "$ANSIBLE_VAULT_PASS" >.vault_pass
