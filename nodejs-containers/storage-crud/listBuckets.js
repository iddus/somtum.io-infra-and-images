import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const listBuckets = async () => {
  let formatted = [];
  const [buckets] = await storage.getBuckets();
  buckets.forEach((bucket) => {
    // console.log(bucket.metadata);
    formatted.push(bucket.metadata);
  });
  return formatted;
};

export default listBuckets;
// https://github.com/googleapis/nodejs-storage/blob/main/samples/listBuckets.js
