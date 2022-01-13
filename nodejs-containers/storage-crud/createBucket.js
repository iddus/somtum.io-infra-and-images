// Imports the Google Cloud client library
import client from "./client.js";

// Creates a client
// const storage = client();

const createBucket = async (
  name,
  storageClass = "nearline",
  location = "US-EAST4"
) => {
  const storage = await client();
  const [bucket] = await storage.createBucket(name, {
    location,
    [storageClass]: true,
    // https://attacomsian.com/blog/javascript-computed-property-names
  });
  return bucket.metadata;
};

export default createBucket;
