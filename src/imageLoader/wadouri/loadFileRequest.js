import parseImageId from './parseImageId.js';
import fileManager from './fileManager.js';

const fs = window.require('fs');

function loadFileRequest(uri) {
  const parsedImageId = parseImageId(uri);
  const fileIndex = parseInt(parsedImageId.url, 10);
  const file = fileManager.get(fileIndex);

  return new Promise((resolve, reject) => {
    console.log(file);
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(new Error(err));
      }
      console.log(data);
      resolve(data);
    });
  });
}

export default loadFileRequest;
