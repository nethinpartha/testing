FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
COPY public ./public
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ARG NEXT_PUBLIC_ENV_API_URL
# ENV NEXT_PUBLIC_ENV_API_URL=${NEXT_PUBLIC_ENV_API_URL}
# ARG NEXT_PUBLIC_ENV_API_KEY
# ENV NEXT_PUBLIC_ENV_API_KEY=${NEXT_PUBLIC_ENV_API_KEY}
# NEXT_PUBLIC_WEBAPP_URL=GTI_WEBAPP_URL
ENV NEXT_PUBLIC_API_URL=http://localhost:8055
ENV NEXT_PUBLIC_API_KEY=BkMmdDZGCkKCJNUg95vcCLu7fmZ8vJmV

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

CMD ["npm", "start"]