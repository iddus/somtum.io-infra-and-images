import express from "express";
import listBuckets from "./listBuckets.js";
import listObjects from "./listObjects.js";

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/buckets", async (req, res) => {
  const buckets = await listBuckets();
  res.send(buckets);
});
// https://zellwk.com/blog/async-await-express/

app.get("/objects/:bucket", async (req, res) => {
  const { bucket } = req.params;
  const objects = await listObjects(bucket);
  res.send(objects);
});

app.get("/everything", (req, res) => {
  res.send("everything");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
