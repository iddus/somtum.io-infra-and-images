import client from "./client.js";

const listObjects = async (bucket) => {
  const storage = await client();
  let formatted = [];
  const [files] = await storage.bucket(bucket).getFiles();
  files.forEach((file) => {
    // console.log(file.metadata);
    formatted.push(file.metadata);
  });
  return formatted;
};

export default listObjects;
