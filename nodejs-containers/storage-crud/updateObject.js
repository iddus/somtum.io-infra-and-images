import client from "./client.js";

const updateObject = async (bucket, name, newName) => {
  const storage = await client();
  const response = await storage.bucket(bucket).file(name).rename(newName);
  return response[1];
};

export default updateObject;
