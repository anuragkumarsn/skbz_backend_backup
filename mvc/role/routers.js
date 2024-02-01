import express from "express";
import RoleController from "./controllers.js";
import Bcrypt from "../../middlewares/hashHandle.js";

const router = express.Router();

router.post("/", RoleController.CreateRole);
router.put("/:id", RoleController.UpdateRole);
router.get("/", RoleController.GetRoles);
router.get("/:id", RoleController.GetRole);
router.delete("/:id", RoleController.DeleteRole);

export default router;
