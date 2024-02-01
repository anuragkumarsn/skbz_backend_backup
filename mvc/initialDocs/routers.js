import express from "express";
import InitialDocsController from "./controllers.js";
import authenticator from "../../middlewares/authenticator.js";

const router = express.Router();

router.post("/", InitialDocsController.AddInitialDoc);
router.get("/", InitialDocsController.GetInitialDocs);
router.get("/:id", InitialDocsController.GetInitialDocById);
router.delete("/:id", InitialDocsController.DeleteInitialDocs);
router.put("/:id", InitialDocsController.UpdateInitialDocs);

export default router;
