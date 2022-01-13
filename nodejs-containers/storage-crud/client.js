import { Storage } from "@google-cloud/storage";

const client = async () => {
  let storage;
  if (process.env.AUTH === "local") {
    // import { projectId, keyFilename } from "./secrets.js";
    let { projectId, keyFilename } = await import("./secrets.js");
    // projectId is optional - https://googleapis.dev/nodejs/storage/latest/global.html#StorageOptions
    // https://javascript.info/modules-dynamic-imports#the-import-expression
    storage = new Storage({ projectId, keyFilename });
  } else {
    storage = new Storage();
  }
  return storage;
};

export default client;
