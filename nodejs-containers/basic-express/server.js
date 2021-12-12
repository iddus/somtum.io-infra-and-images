const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// set to 8080 instead of 3000 here https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
// also calling this file server.js as per ^ doc, express doc calls it app.js, changed this in the package.json as well
// "The environment variables defined in the container runtime contract are reserved and cannot be set. In particular, the PORT environment variable is injected inside your container by Cloud Run. You should not set it yourself." - https://cloud.google.com/run/docs/configuring/environment-variables - got port declaration and initialization line from https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs
// process.env.<?> references an environment variable and can be configured in tf code for the cloud run resource (search for env block in doc) - https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // nodejs.org doc also sets host to 0.0.0.0 but leaving this as what is in express doc
});

// https://expressjs.com/en/starter/hello-world.html
