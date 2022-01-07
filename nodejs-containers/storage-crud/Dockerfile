FROM node:16

WORKDIR /usr/src/app

COPY nodejs-containers/storage-crud/package*.json ./

RUN npm install

COPY nodejs-containers/storage-crud/server.js ./

EXPOSE 8080
CMD [ "node", "server.js" ]