import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const listObjects = async (bucket) => {
  let formatted = [];
  const [files] = await storage.bucket(bucket).getFiles();
  files.forEach((file) => {
    // console.log(file.metadata);
    formatted.push(file.metadata);
  });
  return formatted;
};

export default listObjects;
