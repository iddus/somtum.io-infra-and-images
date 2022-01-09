import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const updateObject = async (bucket, name, newName) => {
  const response = await storage.bucket(bucket).file(name).rename(newName);
  return response[1];
};

export default updateObject;
