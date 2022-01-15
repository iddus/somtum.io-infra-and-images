import client from "./client.js";

const deleteObject = async (bucket, name) => {
  const storage = await client();
  const response = await storage.bucket(bucket).file(name).delete();
  return response[0].headers;
};

export default deleteObject;
