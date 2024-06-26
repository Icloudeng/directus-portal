# Smatflow Portal

## Getting started

This should be private and only admins and developers have permission to edit it.
Here are the tools you must have to get started (Test or Development).

- NodeJS
- NPM
- PNPM (install with: `npm install -g pnpm`)
- Docker

## Description

This is the Smatflow offical site repository.

## Installation

**Clone the repository:**

```
git clone https://hub.smatflow.net/smatflow-projects/smatflow-portal.git
```

**Install packages**

- `pnpm install`

### Database

For a quick start consider using docker and docker compose

- `docker compose -f docker-compose.db.yaml up`

### Copy CMS env file

- `cp apps/cms/.env.sample apps/cms/.env`


### Build Packages

- `pnpm build`

### Setup CMS

- `pnpm run -r setup`

### Create App User

- `pnpm run -r create-app-user`

## Server

- `pnpm dev --filter=web --filter=cms --filter=@apps/contracts`

Starts development servers for (cms: http://localhost:8055/ and web: http://localhost:3000/)


**Admin Account**

- email: admin@example.com
- password: password


## Monorepos

The project was designed on a monorepo architecture, actually there are two apps as project packages:

- `apps/cms`: CMS part powered by Directus
- `apps/web`: Web Part made with NextJs
- `apps/docs`: DOCS Part made with Docusaurus

## Configuration

The default configuration can work without needing to modify it, but in cases where you need customization regarding the project configuration, you can edit the following files:

- `apps/cms/.env` CMS configuration file
- `apps/web/.env` Web configuration (Here you need to create a new configuration file called .env.local where you put your customization, instead of modifying the actual file)

## Authors and acknowledgment

@smatflow

## License

....
