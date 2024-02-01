import fs from "fs";
import path from "path";

class FileHandler {
  static getFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  static fileExists(filePath) {
    return fs.existsSync(filePath);
  }
}

export default FileHandler;
