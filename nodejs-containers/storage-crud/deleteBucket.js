import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const deleteBucket = async (name) => {
  const response = await storage.bucket(name).delete();
  return response[0].headers;
};

export default deleteBucket;
