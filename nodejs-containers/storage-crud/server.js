import express from "express";
import listBuckets from "./listBuckets.js";
import listObjects from "./listObjects.js";
import createBucket from "./createBucket.js";
import deleteBucket from "./deleteBucket.js";
import deleteObject from "./deleteObject.js";
import updateObject from "./updateObject.js";

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/everything", (req, res) => {
  return res.status(200).json("everything");
});

app.get("/buckets", async (req, res) => {
  let buckets;
  try {
    buckets = await listBuckets();
    // returns an array of bucket objects
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(buckets);
});
// https://zellwk.com/blog/async-await-express/

app.get("/objects/:bucket", async (req, res) => {
  let objects;
  try {
    const { bucket } = req.params;
    objects = await listObjects(bucket);
    // returns an array of objects in the bucket
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(objects);
});

app.post("/buckets/:name", async (req, res) => {
  let response;
  try {
    const { name } = req.params;
    response = await createBucket(name);
    // returns an object with metadata of created bucket
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(response);
  // https://cloud.google.com/storage/docs/naming-buckets#requirements
});

app.delete("/buckets/:name", async (req, res) => {
  let response;
  try {
    const { name } = req.params;
    response = await deleteBucket(name);
    // returns an object with data like date/time of deletion and nothing else of importance to UI...
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(response);
});

app.delete("/objects/:bucket/:name", async (req, res) => {
  let response;
  try {
    const { bucket } = req.params;
    const { name } = req.params;
    response = await deleteObject(bucket, name);
    // returns an object with data like date/time of deletion and nothing else of importance to UI...
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(response);
});

app.put("/objects/:bucket/:name/:newname", async (req, res) => {
  let response;
  try {
    const { bucket } = req.params;
    const { name } = req.params;
    const { newname: newName } = req.params;
    response = await updateObject(bucket, name, newName);
    // returns an object with metadata of updated object
  } catch (error) {
    console.log(error);
    return res
      .status(error.code)
      .json({ code: error.code, message: error.errors[0].message });
  }
  return res.status(200).json(response);
  // https://cloud.google.com/storage/docs/naming-objects#objectnames
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
// https://expressjs.com/en/4x/api.html#res
// The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
// https://expressjs.com/en/4x/api.html#req

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
