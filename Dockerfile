FROM node:18.18.0-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . .
COPY .env .env
RUN npm run build
RUN ls -l /app/build  # Debugging step to list contents of /app/build
RUN npm prune --production

FROM node:18.18.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
COPY .env .env
EXPOSE 8001
ENV NODE_ENV=production
CMD [ "node", "build/index.js" ]