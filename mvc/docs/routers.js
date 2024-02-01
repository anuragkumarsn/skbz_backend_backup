import express from "express";
import DocsController from "./controllers.js";
import { upload } from "../../middlewares/multer.js";

const router = express.Router();

router.post("/upload", upload.single("file"), DocsController.UploadDoc);
router.post("/uploads", upload.array("files"), DocsController.UploadDocs);
router.get("/download/:filename", DocsController.DownloadDoc);

export default router;
