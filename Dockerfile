# build environment

FROM node:16.14.2-alpine as build

ARG BUILD_ENV=develop

WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY ./ /app/
COPY ./environment/${BUILD_ENV}.env /app/.env
RUN npm run build

# production environment
FROM nginx:stable-alpine
# FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]