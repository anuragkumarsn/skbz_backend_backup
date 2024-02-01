import express from "express";
import AdminController from "./controllers.js";
import Bcrypt from "../../middlewares/hashHandle.js";
import authenticator from "../../middlewares/authenticator.js";

const router = express.Router();

router.post("/", Bcrypt.convertHash, AdminController.RegisterAdmin);
router.post("/login", AdminController.LoginAdmin);
router.get("/", authenticator.user, AdminController.GetAdmins);
router.get("/:id", authenticator.user, AdminController.GetAdmin);
router.delete("/:id", authenticator.user, AdminController.DeleteAdmin);

export default router;
