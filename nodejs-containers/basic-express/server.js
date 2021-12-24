const express = require("express");
const app = express();
const uuidv4 = require("uuid/v4");
const PORT = process.env.PORT || 8080;
// set to 8080 instead of 3000 here https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
const HOST = "0.0.0.0";
// also calling this file server.js as per ^ doc (https://nodejs.org/en/docs/guides/nodejs-docker-webapp/), express doc calls it app.js, changed this in the package.json as well
// "The environment variables defined in the container runtime contract are reserved and cannot be set. In particular, the PORT environment variable is injected inside your container by Cloud Run. You should not set it yourself." - https://cloud.google.com/run/docs/configuring/environment-variables - got port declaration and initialization line from https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs
// process.env.<?> references an environment variable and can be configured in tf code for the cloud run resource (search for env block in doc) - https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service

const uuid = uuidv4();
// https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

app.get("/", (req, res) => {
  res.send(`hello world! ${uuid}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// https://expressjs.com/en/starter/hello-world.html
