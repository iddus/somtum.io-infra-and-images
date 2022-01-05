import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";
import { v4 } from "uuid";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const uploadFile = (
  bucketName = "wi1ecoengncd7o6u",
  filePath = "test2.txt",
  destFileName = `${v4()}.txt`
) => {
  async function uploadFile() {
    await storage.bucket(bucketName).upload(filePath, {
      destination: destFileName,
    });
    console.log(`${filePath} uploaded to ${bucketName}`);
  }
  uploadFile().catch(console.error);
};
// https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFile.js

uploadFile(...process.argv.slice(2));