import DownloadDocServices from "./services.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DocsController = {
  UploadDoc: async (req, res, next) => {
    const file = req.file;
    try {
      if (file) {
        res
          .status(200)
          .json({ data: file, uploaded: true, message: "File stored!" });
      } else {
        res
          .status(200)
          .json({ data: null, uploaded: false, message: "File not stored!" });
      }
    } catch (err) {
      next(err);
    }
  },

  UploadDocs: async (req, res, next) => {
    const files = req.files;
    try {
      if (files?.length) {
        res
          .status(200)
          .json({ data: files, uploaded: true, message: "File stored!" });
      } else {
        res
          .status(200)
          .json({ data: null, uploaded: false, message: "File not stored!" });
      }
    } catch (err) {
      next(err);
    }
  },

  DownloadDoc: async (req, res, next) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "../../uploads", filename);
    DownloadDocServices.DownloadDoc({ filePath }, async (data) => {
      if (data.data) {
        try {
          res.setHeader(
            "Content-Disposition",
            `attachment; filename=${filename}`
          );
          res.setHeader("Content-Type", "application/octet-stream");
          res.send(data?.data);
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        }
      } else {
        res.status(400).json({ message: data.message });
      }
    });
  },
};

export default DocsController;
