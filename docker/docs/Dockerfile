FROM node:lts-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat curl
RUN apk update
# 
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PATH:$PNPM_HOME
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm && chmod +x /bin/pnpm
# Set working directory
WORKDIR /app
RUN pnpm add turbo --global
COPY . .
RUN turbo prune --scope=docs --scope=docs-generator --scope=pm2 --docker
RUN find . -type d -regex ".*node_modules" -exec rm -rf "{}" \+




# Add lockfile and package.json's of isolated subworkspace
FROM node:lts-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@latest --activate
# Set working directory
WORKDIR /app
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
# Build the apps
RUN pnpm build --filter=docs --filter=docs-generator
RUN find . -type d -regex ".*node_modules" -exec rm -rf "{}" \+



# Runner stage
FROM node:lts-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/out/json/ .
COPY --from=installer /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN rm -rf ./package.json

RUN pnpm \ 
    --filter-prod="./apps/docs" \
    --filter-prod="./packages/contracts" \
    --filter-prod="./packages/docs-pubsub" \
    --filter-prod="./tools/docs-generator" \
    --filter-prod="./tools/pm2" \
    install --frozen-lockfile --ignore-scripts --prod


COPY --from=installer /app/apps/docs ./apps/docs
COPY --from=installer /app/packages ./packages
COPY --from=installer /app/tools ./tools

# clean pnpm cache
RUN pnpm store prune
RUN rm -rf ~/.pnpm-store

# Copy pm2 runner script
COPY docker/docs/ecosystem.config.js ./ecosystem.config.js

# Envs
ENV NODE_ENV=production
ENV PATH $PATH:/app/tools/pm2/node_modules/.bin
ENV DOCS_APP_PM2_NAME=docs-app
ENV DG_APP_PM2_NAME=docs-generator

RUN \
    # Create data directories
    mkdir -p \
    ./apps/docs/i18n \
    ./apps/docs/docs \
    ./apps/docs/meta \
    ./apps/docs/build \
    ./tools/docsearch-scraper/meta


VOLUME \
    /app/apps/docs/i18n \
    /app/apps/docs/docs \
    /app/apps/docs/meta \
    /app/apps/docs/.docusaurus \
    /app/tools/docsearch-scraper/meta

EXPOSE 3100

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]