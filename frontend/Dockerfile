FROM node:20-alpine

WORKDIR /frontend
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]