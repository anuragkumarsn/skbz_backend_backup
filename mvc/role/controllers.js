import RoleServices from "./services.js";

const RoleController = {
  CreateRole: async (req, res, next) => {
    try {
      const data = req.body;
      RoleServices.CreateRole(data, (resp) => {
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

  UpdateRole: async (req, res, next) => {
    try {
      const data = req.body;
      data.role_id = req.params.id;
      RoleServices.UpdateRole(data, (resp) => {
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

  GetRoles: async (req, res, next) => {
    try {
      const data = req.body;
      RoleServices.GetRoles(data, (resp) => {
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

  GetRole: async (req, res, next) => {
    try {
      const id = req.params.id;
      RoleServices.GetRole({ id }, (resp) => {
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

  DeleteRole: async (req, res, next) => {
    try {
      const id = req.params.id;
      RoleServices.DeleteRole({ id }, (resp) => {
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

export default RoleController;
