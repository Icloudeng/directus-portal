# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM node:lts-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat curl
RUN apk update
# 
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PATH:$PNPM_HOME
RUN  curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm && chmod +x /bin/pnpm
# Set working directory
WORKDIR /app
RUN pnpm add turbo --global
COPY . .
RUN chmod +x docker/cms/start-cms.sh
RUN turbo prune --scope=cms --docker


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
RUN pnpm turbo run build --filter=cms
RUN find . -type d -regex ".*node_modules" -exec rm -rf "{}" \+


# Runner stage
FROM node:lts-alpine AS runner
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Don't run production as root
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 app
# USER app

# copy files
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Automatically leverage output traces to reduce image size
RUN rm -rf ./package.json

RUN pnpm --filter-prod "./apps/cms" install --frozen-lockfile --prod
# install concurrently
RUN pnpm --filter-prod "./apps/cms" add concurrently --prod

COPY --from=installer /app/apps/cms ./apps/cms
COPY --from=installer /app/packages/ ./packages/

RUN pnpm store prune

# Copy server runner server
COPY --from=builder /app/docker/cms/start-cms.sh ./start-cms.sh

RUN rm -rf /app/apps/cms/uploads
RUN rm -rf ./apps/cms/.env
RUN find ./packages/ -type d -regex ".*node_modules" -exec rm -rf "{}" \+

RUN \
  # Create data directories
  mkdir -p \
  ./apps/cms/database \
  ./apps/cms/extensions \
  ./apps/cms/uploads

VOLUME \
  /app/apps/cms/database \
  /app/apps/cms/extensions \
  /app/apps/cms/uploads

ENV \
  DB_CLIENT="sqlite3" \
  DB_FILENAME="/app/apps/cms/database/database.sqlite" \
  EXTENSIONS_PATH="/app/apps/cms/extensions" \
  STORAGE_LOCAL_ROOT="/app/apps/cms/uploads"

ENV WORK_APP=cms

EXPOSE 8055

CMD ["./start-cms.sh"]
