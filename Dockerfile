FROM node:20-alpine3.17 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine3.17-slim AS prod
COPY --chown=www-data:www-data --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
