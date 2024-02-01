import express from "express";
import PartController from "./controllers.js";
import authenticator from "../../middlewares/authenticator.js";

const router = express.Router();

router.post("/", authenticator.user, PartController.AddPart);
router.get("/", authenticator.user, PartController.GetParts);
router.get("/:id", authenticator.user, PartController.GetPart);
router.delete("/:id", authenticator.user, PartController.DeletePart);
router.put("/:id", authenticator.user, PartController.UpdatePart);

export default router;
