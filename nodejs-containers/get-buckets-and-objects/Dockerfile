FROM node:16

WORKDIR /usr/src/app

COPY nodejs-containers/get-buckets-and-objects/package*.json ./

RUN npm install

COPY nodejs-containers/get-buckets-and-objects/server.js ./

EXPOSE 8080
CMD [ "node", "server.js" ]