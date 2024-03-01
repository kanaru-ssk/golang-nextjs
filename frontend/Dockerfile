FROM node:20-alpine AS base
WORKDIR /frontend

FROM base AS dev
COPY package.json package-lock.json .
RUN npm ci
CMD ["npm", "run", "dev"]

FROM base AS builder
WORKDIR /frontend
COPY package.json package-lock.json .
RUN npm ci
COPY next-env.d.ts next.config.js postcss.config.js tailwind.config.ts tsconfig.json .
COPY public ./public
COPY src ./src
RUN npm run build

FROM base AS prd
WORKDIR /frontend
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=builder /frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /frontend/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /frontend/.next/static ./.next/static
CMD ["node", "server.js"]