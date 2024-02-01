import FileHandler from "../../doa/docs.js";

const DonwloadDocServices = () => {
  const DownloadDoc = async (data, cb) => {
    if (FileHandler.fileExists(data.filePath)) {
      const fileData = await FileHandler.getFile(data.filePath);
      if (fileData) {
        cb({ err: true, data: fileData, message: "File found!" });
      } else {
        cb({ err: true, data: null, message: "File data not found!" });
      }
    } else {
      cb({ err: true, data: null, message: "File not found!" });
    }
  };
  return {
    DownloadDoc,
  };
};

export default DonwloadDocServices();
