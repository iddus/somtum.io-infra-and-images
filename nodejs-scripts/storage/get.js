import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

function main() {
  // Creates a client
  const storage = new Storage({ projectId, keyFilename });

  async function listBuckets() {
    const [buckets] = await storage.getBuckets();

    console.log("Buckets:");
    buckets.forEach((bucket) => {
      console.log(bucket.name);
    });
  }

  listBuckets().catch(console.error);
}

main(...process.argv.slice(2));

// https://github.com/googleapis/nodejs-storage/blob/main/samples/listBuckets.js
