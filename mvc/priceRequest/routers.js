import express from "express";
import PriceRequestController from "./controllers.js";
import authenticator from "../../middlewares/authenticator.js";

const router = express.Router();

router.post("/", authenticator.user, PriceRequestController.CreatePriceRequest);
router.get("/", authenticator.admin, PriceRequestController.GetPriceRequests);
router.put(
  "/:id",
  authenticator.user,
  PriceRequestController.UpdatePriceRequest
);
router.delete(
  "/:id",
  authenticator.user,
  PriceRequestController.DeletePriceRequest
);

export default router;
