import InitialDocsServices from "./services.js";

const InitialDocsController = {
  AddInitialDoc: async (req, res, next) => {
    try {
      const data = req.body;
      InitialDocsServices.AddInitialDoc(data, (resp) => {
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

  GetInitialDocs: async (req, res, next) => {
    try {
      InitialDocsServices.GetInitialDocs(null, (resp) => {
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

  GetInitialDocById: async (req, res, next) => {
    try {
      const id = req.params.id;
      InitialDocsServices.GetInitialDocById({ id }, (resp) => {
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

  DeleteInitialDocs: async (req, res, next) => {
    try {
      const id = req.params.id;
      InitialDocsServices.DeleteInitialDocs({ id }, (resp) => {
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

  UpdateInitialDocs: (req, res, next) => {
    try {
      const data = req.body;
      data.document_id = req.params.id;
      InitialDocsServices.UpdateInitialDocs(data, (resp) => {
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

export default InitialDocsController;
