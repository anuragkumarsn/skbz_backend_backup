import CurrencyConverterServices from "./services.js";

const CurrencyConverterController = {
  ConvertCurr: (req, res) => {
    CurrencyConverterServices.ConvertCurr(
      { from: req.params.from, to: req.params.to, amt: Number(req.params.amt) },
      (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      }
    );
  },

  CurrencyRates: (req, res) => {
    CurrencyConverterServices.CurrencyRates(
      { from: req.params.from, to: req.params.to },
      (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      }
    );
  },
};

export default CurrencyConverterController;
