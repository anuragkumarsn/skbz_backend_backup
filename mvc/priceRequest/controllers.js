import PriceRequestServices from "./services.js";

const PriceRequestController = {
  CreatePriceRequest: async (req, res, next) => {
    try {
      const data = req.body;
      PriceRequestServices.CreatePriceRequest(data, (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      });
    } catch (err) {
      next(err);
    }
  },

  UpdatePriceRequest: async (req, res, next) => {
    try {
      const data = req.body;
      data.price_request_id = req.params.id;
      PriceRequestServices.UpdatePriceRequest(data, (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      });
    } catch (err) {
      next(err);
    }
  },

  GetPriceRequests: async (req, res, next) => {
    try {
      const data = req.body;
      PriceRequestServices.GetPriceRequests(data, (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      });
    } catch (err) {
      next(err);
    }
  },

  DeletePriceRequest: async (req, res, next) => {
    try {
      const id = req.params.id;
      PriceRequestServices.DeletePriceRequest({ id }, (resp) => {
        if (!resp.err) {
          res.status(200).json(resp);
        } else {
          res.status(400).json(resp);
        }
      });
    } catch (err) {
      next(err);
    }
  },
};

export default PriceRequestController;
