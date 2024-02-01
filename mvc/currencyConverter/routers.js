import express from "express";
import CurrencyConverterController from "./controllers.js";

const router = express.Router();

router.get("/convert/:from/:to/:amt", CurrencyConverterController.ConvertCurr);
router.get("/rates/:from/:to", CurrencyConverterController.CurrencyRates);

export default router;
