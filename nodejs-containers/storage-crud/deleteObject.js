import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const deleteObject = async (bucket, name) => {
  const response = await storage.bucket(bucket).file(name).delete();
  return response[0].headers;
};

export default deleteObject;
