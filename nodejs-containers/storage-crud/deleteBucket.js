import client from "./client.js";

const deleteBucket = async (name) => {
  const storage = await client();
  const response = await storage.bucket(name).delete();
  return response[0].headers;
};

export default deleteBucket;
