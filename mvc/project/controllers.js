import ProjectServices from "./services.js";

const AdminController = {
  AddProject: (req, res, next) => {
    try {
      const data = req.body;
      ProjectServices.AddProject(data, (resp) => {
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

  GetProjects: (req, res, next) => {
    try {
      const data = req.body;
      ProjectServices.GetProjects(data, (resp) => {
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

  GetProject: (req, res, next) => {
    try {
      ProjectServices.GetProject({ id: req.params.id }, (resp) => {
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

  DeleteProject: (req, res, next) => {
    try {
      ProjectServices.DeleteProject({ id: req.params.id }, (resp) => {
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

  UpdateProject: (req, res, next) => {
    try {
      const data = req.body;
      data.project_id = req.params.id;
      ProjectServices.UpdateProject(data, (resp) => {
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
  GetProjectStatusCount: (req, res, next) => {
    try {
      const data = req.body;
      ProjectServices.GetProjectStatusCount(data, (resp) => {
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
