import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const createObject = async (
  bucketName,
  destFileName,
  filePath = "text2.txt"
) => {
  const response = await storage.bucket(bucketName).upload(filePath, {
    destination: destFileName,
  });
  return response;
};

export default createObject;