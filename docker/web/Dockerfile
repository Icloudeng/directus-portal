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
RUN turbo prune --scope=web --docker
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
RUN pnpm turbo run build --filter=web...



# Runner stage
FROM node:lts-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/out/json/ .
COPY --from=installer /app/apps/web/next.config.js ./apps/web/next.config.js
COPY --from=installer /app/apps/web/next-i18next.config.js ./apps/web/next-i18next.config.js
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm --filter "./apps/web" install --frozen-lockfile --ignore-scripts --prod

RUN pnpm store prune
RUN corepack disable
RUN rm -rf ~/.pnpm-store
RUN rm -rf /bin/pnpm
RUN find ./packages/ -type d -regex ".*node_modules" -exec rm -rf "{}" \+

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_SHARP_PATH=/app/apps/web/node_modules/sharp

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./apps/web
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

EXPOSE 3000

ENV PORT=3000

CMD node ./apps/web/server.js