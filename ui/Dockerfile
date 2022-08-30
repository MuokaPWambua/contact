# build the React front end
FROM node:alpine as build

COPY . ./app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --legacy-peer-deps
RUN npm run build


FROM nginx:stable-alpine

EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
