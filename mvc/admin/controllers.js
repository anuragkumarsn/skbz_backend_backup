import AdminServices from "./services.js";

const AdminController = {
  RegisterAdmin: async (req, res, next) => {
    try {
      const data = req.body;
      console.log("PASSWORD : ", { ...data, password: req.hashValue });
      AdminServices.RegisterAdmin(
        { ...data, password: req.hashValue },
        (resp) => {
          if (!resp.err) {
            res.status(200).json(resp);
          } else {
            res.status(400).json(resp);
          }
        }
      );
    } catch (err) {
      next(err);
    }
  },

  LoginAdmin: async (req, res, next) => {
    try {
      const data = req.body;
      AdminServices.LoginAdmin(data, (resp) => {
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

  GetAdmins: async (req, res, next) => {
    try {
      const data = req.body;
      AdminServices.GetAdmins(data, (resp) => {
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

  GetAdmin: async (req, res, next) => {
    try {
      const id = req.params.id;
      AdminServices.GetAdmin({ id }, (resp) => {
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

  DeleteAdmin: async (req, res, next) => {
    try {
      const id = req.params.id;
      AdminServices.DeleteAdmin({ id }, (resp) => {
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

export default AdminController;
