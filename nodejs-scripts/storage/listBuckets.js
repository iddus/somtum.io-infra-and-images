import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const listBuckets = () => {
  async function listBuckets() {
    const [buckets] = await storage.getBuckets();
    console.log("Buckets:");
    buckets.forEach((bucket) => {
      // console.log(bucket.name);
      console.log(bucket.metadata);
    });
  }
  listBuckets().catch(console.error);
};

listBuckets();
// https://github.com/googleapis/nodejs-storage/blob/main/samples/listBuckets.js
