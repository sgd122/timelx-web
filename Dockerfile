FROM node:23-alpine AS base

# Install dependencies only when needed
FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
COPY yarn.lock ./
#COPY next-sitemap.config.js ./
#COPY next-i18next.config.js ./
#COPY .pnp.cjs ./
#COPY .pnp.loader.mjs ./
#COPY .yarnrc.yml ./
#COPY .yarn ./.yarn
RUN yarn install --immutable

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
#COPY --from=deps /app/.yarn ./.yarn
#COPY --from=deps /app/next-sitemap.config.js ./next-sitemap.config.js
#COPY --from=deps /app/next-i18next.config.js ./next-i18next.config.js
#COPY --from=deps /app/.pnp.cjs ./pnp.cjs
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
#COPY --from=builder --chown=nextjs:nodejs /app/.pnp.cjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN rm -rf ./.yarn/cache
#COPY --from=builder --chown=nextjs:nodejs /app/.yarn ./.yarn/

USER nextjs

EXPOSE 3000

ENV PORT 3000

 CMD ["node", "server.js"]
#CMD ["node", "-r", "./.pnp.cjs", "server.js"]