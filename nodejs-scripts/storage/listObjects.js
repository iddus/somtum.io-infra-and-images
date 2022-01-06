import { projectId, keyFilename } from "./secrets.js";
// Imports the Google Cloud client library
import { Storage } from "@google-cloud/storage";

// Creates a client
const storage = new Storage({ projectId, keyFilename });

const getObject = async (bucketName, object) => {
  const fileData = await storage.bucket(bucketName).file(object).get();
  console.log(fileData[1]);
};
// https://googleapis.dev/nodejs/storage/latest/File.html#get

const listObjects = (bucketName) => {
  async function listFiles() {
    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();
    console.log("Files:");
    files.forEach((file) => {
      console.log(file.name);
      // `file` object doesn't provide any useful file information, so using getObject method defined above - NOT TRUE!!!, `file.metadata` has useful file information, so no need to chain `getObject` method above, `getObject` gives you the same information as `file.metadata`
      // getObject(bucketName, file.name);
    });
  }
  listFiles().catch(console.error);
};

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ - "In Node.js, as in C and many related environments, all command-line arguments received by the shell are given to the process in an array called argv (short for 'argument values')."
// https://www.digitalocean.com/community/tutorials/js-spread-operator - "The spread operator effectively gives you access to the “stuff” inside these iterable objects."
listObjects(...process.argv.slice(2));

// removing the spread operator logs [ 'wi1ecoengncd7o6u' ], WITH the spread operator you'll get the string inside the array (which is the name of a bucket in this example)
// console.log(process.argv.slice(2));
