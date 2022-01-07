import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const createBucket = async (
  name,
  storageClass = "nearline",
  location = "US-EAST4"
) => {
  const [bucket] = await storage.createBucket(name, {
    location,
    [storageClass]: true,
    // https://attacomsian.com/blog/javascript-computed-property-names
  });
  return bucket.metadata;
};

export default createBucket;
