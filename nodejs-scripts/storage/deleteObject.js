import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const deleteObject = (bucketName = "my-bucket", fileName = "test.txt") => {
  async function deleteFile() {
    await storage.bucket(bucketName).file(fileName).delete();
    console.log(`gs://${bucketName}/${fileName} deleted`);
  }
  deleteFile().catch(console.error);
};
// https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteFile.js

deleteObject(...process.argv.slice(2));