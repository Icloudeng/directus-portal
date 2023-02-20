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



# Runner stage
FROM node:lts-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/out/json/ .
COPY --from=installer /app/pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=installer /app/apps/docs ./apps/docs
COPY --from=installer /app/packages ./packages
COPY --from=installer /app/tools ./tools


RUN rm -rf ./package.json
RUN find ./packages/ -type d -regex ".*node_modules" -exec rm -rf "{}" \+
RUN find ./tools/ -type d -regex ".*node_modules" -exec rm -rf "{}" \+

RUN pnpm --filter "./apps/docs" install --frozen-lockfile --ignore-scripts
RUN pnpm --filter "./tools/docs-generator" install --frozen-lockfile --ignore-scripts --prod
RUN pnpm --filter "./tools/pm2" install --frozen-lockfile --ignore-scripts --prod

# Remove pm2 and its caches
RUN pnpm store prune
RUN corepack disable
RUN rm -rf ~/.pnpm-store
RUN rm -rf /bin/pnpm

# Copy runner script
COPY docker/docs/start-docs.sh ./start-docs.sh
RUN chmod +x ./start-docs.sh

# Create nessesary files for docs
RUN touch apps/docs/meta.json && echo "{}" > apps/docs/meta.json

# Envs
ENV NODE_ENV=production
ENV PATH $PATH:/app/tools/pm2/node_modules/.bin
ENV DOCS_APP_PM2_NAME=docs-app
ENV DG_APP_PM2_NAME=docs-generator

VOLUME \
    /app/apps/docs/i18n \
    /app/apps/docs/docs \
    /app/apps/docs/meta \
    /app/apps/docs/build

EXPOSE 3100

CMD ["./start-docs.sh"]