#!/usr/bin/env bash

set -u
: "${ANSIBLE_VAULT_PASS}"

set -u
: "${ANSIBLE_DEPLOY_KEY}"

echo "$ANSIBLE_VAULT_PASS" >.vault_pass
