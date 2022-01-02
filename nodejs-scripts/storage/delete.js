import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

function deleteBucket(bucketName = "my-bucket") {
  async function deleteBucket() {
    await storage.bucket(bucketName).delete();
    console.log(`Bucket ${bucketName} deleted`);
  }
  deleteBucket().catch(console.error);
}

deleteBucket(...process.argv.slice(2));

// https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteFile.js