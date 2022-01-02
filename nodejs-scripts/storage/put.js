import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

// The ID of the GCS file to rename
// const srcFilename = 'your-file-name';
// The new ID of the GCS file
// const destFileName = 'target-file-name';
function renameObject(
  srcBucketName = "my-bucket",
  srcFileName = "test2.txt",
  destFileName = "test4.txt"
) {
  async function renameFile() {
    await storage.bucket(srcBucketName).file(srcFileName).rename(destFileName);
    console.log(
      `gs://${srcBucketName}/${srcFileName} renamed to gs://${srcBucketName}/${destFileName}.`
    );
  }
  renameFile().catch(console.error);
}
renameObject(...process.argv.slice(2));

// https://rapidapi.com/blog/put-vs-patch/
