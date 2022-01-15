import client from "./client.js";

const listBuckets = async () => {
  const storage = await client();
  let formatted = [];
  const [buckets] = await storage.getBuckets();
  buckets.forEach((bucket) => {
    // console.log(bucket.metadata);
    formatted.push(bucket.metadata);
  });
  return formatted;
};

export default listBuckets;
// https://github.com/googleapis/nodejs-storage/blob/main/samples/listBuckets.js
