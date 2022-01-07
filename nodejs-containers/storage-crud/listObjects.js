import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const listObjects = async (bucket) => {
  let formatted = [];
  const [files] = await storage.bucket(bucket).getFiles();
  files.forEach(async (file) => {
    const object = { [file.name]: file.metadata };
    // https://attacomsian.com/blog/javascript-computed-property-names
    formatted.push(object);
  });
  return formatted;
};

export default listObjects;
