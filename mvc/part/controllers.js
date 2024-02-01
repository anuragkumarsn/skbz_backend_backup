import PartServices from "./services.js";

const PartController = {
  AddPart: (req, res, next) => {
    try {
      const data = req.body;
      data.createdBy = req.userData._id;
      PartServices.AddPart(data, (resp) => {
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

  GetParts: (req, res, next) => {
    console.log("originalUrl : ", req.originalUrl);
    try {
      const data = req.body;
      PartServices.GetParts(data, (resp) => {
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

  GetPart: (req, res, next) => {
    try {
      PartServices.GetPart({ id: req.params.id }, (resp) => {
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

  DeletePart: (req, res, next) => {
    try {
      PartServices.DeletePart({ id: req.params.id }, (resp) => {
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

  UpdatePart: (req, res, next) => {
    try {
      const data = req.body;
      data.part_id = req.params.id;
      PartServices.UpdatePart(data, (resp) => {
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

export default PartController;
