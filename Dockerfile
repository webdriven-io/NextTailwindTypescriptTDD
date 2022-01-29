# Install dependencies only when needed
FROM node:alpine AS deps
RUN npm install -g pnpm
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm -r i

# Rebuild the source code only when needed
FROM node AS builder
WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install -g pnpm

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build && pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
RUN npm install -g pnpm
RUN apk add curl
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/.env ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["pnpm", "start"]
