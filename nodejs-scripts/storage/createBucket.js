import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";
import { v4 } from "uuid";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

// See the StorageClass documentation for other valid storage classes:
// https://cloud.google.com/storage/docs/storage-classes
// See this documentation for other valid locations:
// https://cloud.google.com/storage/docs/locations
// storage.createBucket method and method params:
// https://googleapis.dev/nodejs/storage/latest/Storage.html#createBucket, https://googleapis.dev/nodejs/storage/latest/global.html#CreateBucketRequest

const createBucket = (
  bucketName = v4(),
  storageClass = "nearline",
  location = "US-EAST4"
) => {
  async function createBucketWithStorageClassAndLocation() {
    const [bucket] = await storage.createBucket(bucketName, {
      location,
      [storageClass]: true,
    });
    console.log(
      `${bucket.name} created with ${storageClass} class in ${location}`
    );
  }
  createBucketWithStorageClassAndLocation().catch(console.error);
};
process.on("unhandledRejection", (err) => {
  console.error(err.message);
  process.exitCode = 1;
});

createBucket(...process.argv.slice(2));
