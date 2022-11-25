# Icloudeng Portal

## Getting started

This should be private and only admins and developers have permission to edit it.
Here are the tools you must have to get started (Test or Development).

- NodeJS
- Npm
- PNPM (install with: `npm install -g pnpm`)
- Make

## Description

This is the Icloudeng offical site repository.

## Installation

**Clone the repository:**

```
git clone https://devops.icloudeng.com/icloudeng-system/icloudeng-portal.git
```

**Install packages**

- `pnpm install`

### Database

For a quick start consider using docker and docker-compose

- `make postgres-docker`

## Monorepos

The project was designed on a monorepo architecture, actually there are two apps as project packages:

- `apps/cms`: CMS part powered by Directus
- `apps/web`: Web Part made with NextJs

## Configuration

The default configuration can work without needing to modify it, but in cases where you need customization regarding the project configuration, you can edit the following files:

- `apps/cms/.env` CMS configuration file
- `apps/web/.env` Web configuration (Here you need to create a new configuration file called .env.local where you put your customization, instead of modifying the actual file)

## Server

To start the development server run the following command on your terminal

- `make postgres-docker` mount database container
- `pnpm -r bootstrap` bootstrap cms configuration (To run once)
- `pnpm run dev` start development servers for (cms: http://localhost:8055/ and web: http://localhost:3000/)


## Test and Deploy

**Ansible Install**

> it is recommended to use a virtual environment, you can create it and install ansible with the following command:

- `make ansible-install` this will create the virtual environment and install ansible

**Configuration**

To customize the ansible inventory, you can edit the `ansible/hosts.yml` file

**Provisioning**

to provision the remote server, run the following command:

- `make provision`

## Authors and acknowledgment

@icloudeng

## License

...