const express = require("express");
const app = express();
const { v4 } = require("uuid");
const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8080;
// node.js doc (https://cloud.google.com/run/docs/reference/container-contract#port) set port to 8080 instead of 3000 like in express.js doc (https://expressjs.com/en/starter/hello-world.html), cloud run doc (https://cloud.google.com/run/docs/reference/container-contract#port) also say port must be 8080
// also calling this file server.js as per node.js doc (https://nodejs.org/en/docs/guides/nodejs-docker-webapp/), express doc calls it app.js, changed this in the package.json as well
// "The environment variables defined in the container runtime contract are reserved and cannot be set. In particular, the PORT environment variable is injected inside your container by Cloud Run. You should not set it yourself." - https://cloud.google.com/run/docs/configuring/environment-variables - got port declaration and initialization line from https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs
// process.env.<?> references an environment variable and can be configured in tf code for the cloud run resource (search for env block in doc) - https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service

const uuid = v4();
// https://www.npmjs.com/package/uuid

app.get("/", (req, res) => {
  res.send(`response from basic-express app / version:${uuid}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
