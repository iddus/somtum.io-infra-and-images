import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const getObject = async (bucket, object) => {
  const fileData = await storage.bucket(bucket).file(object).get();
  return fileData[1];
};
// https://googleapis.dev/nodejs/storage/latest/File.html#get

const listObjects = async (bucket) => {
  let formatted = [];
  const [files] = await storage.bucket(bucket).getFiles();
  for (const file of files) {
    // files.forEach(async (file) => {
    // cannot use async/await with forEach - https://stackoverflow.com/a/37576787/8379751
    const objectDetails = await getObject(bucket, file.name);
    const object = { [file.name]: objectDetails };
    // https://attacomsian.com/blog/javascript-computed-property-names
    formatted.push(object);
  }
  return formatted;
};

export default listObjects;
// use this as guide if you need to chain API calls, e.g., make one API call to get a list of something, and use the id/name of that something to make another API call to get something related to that something
