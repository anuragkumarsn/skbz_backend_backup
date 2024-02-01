import express from "express";
import ProjectController from "./controllers.js";

const router = express.Router();

router.post("/", ProjectController.AddProject);
router.get("/", ProjectController.GetProjects);
router.get("/getProjectCounts", ProjectController.GetProjectStatusCount);
router.get("/:id", ProjectController.GetProject);
router.delete("/:id", ProjectController.DeleteProject);
router.get("/:id", ProjectController.DeleteProject);
router.put("/:id", ProjectController.UpdateProject);

export default router;
