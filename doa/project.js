import projects from "../schema/project.js";
import { constants } from "../constants.js";
import mongoose from "mongoose";
const project = "Project";

const ProjectObjects = {
  addProject: async (data, cb) => {
    try {
      const result = await new projects(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, project + constants.response_messages.created);
      } else {
        cb(true, null, project + constants.response_messages.failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getProjects: async (data, cb) => {
    try {
      const projection = {
        clientName: 1,
        projectId: 1 /* Add more fields as needed */,
      };
      const result = await projects.find({});
      if (result) {
        cb(null, result, project + constants.response_messages.get_success);
      } else {
        cb(true, null, project + constants.response_messages.get_failed);
      }
    } catch (err) {
      console.log("err : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getProject: async (data, cb) => {
    const id = data.id;
    try {
      const result = await projects.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "pricerequests",
            localField: "projectId",
            foreignField: "projectId",
            as: "priceRequests",
          },
        },
        {
          $lookup: {
            from: "initialdocs",
            localField: "projectId",
            foreignField: "projectId",
            as: "initialDocs",
          },
        },
      ]);

      if (result) {
        cb(null, result, project + constants.response_messages.get_success);
      } else {
        cb(true, null, project + constants.response_messages.get_failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  projectMetadata: async (data, cb) => {
    const id = data.id;
    try {
      const result = await projects.findById(id);
      if (result) {
        cb(null, result, project + constants.response_messages.get_success);
      } else {
        cb(true, null, project + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  deleteProject: async (data, cb) => {
    const id = data.id;
    try {
      const result = await projects.findByIdAndDelete(id);
      if (result) {
        cb(null, result, project + constants.response_messages.deleted);
      } else {
        cb(true, null, project + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  updateProject: async (data, cb) => {
    const id = data.project_id;
    try {
      const result = await projects.findByIdAndUpdate(id, data, { new: true });
      if (result) {
        cb(null, result, project + constants.response_messages.updated);
      } else {
        cb(true, null, constants.response_messages.updated_failed + project);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getProjectStatusCount: async (data, cb) => {
    try {
      const result = await projects.aggregate([
        {
          $group: {
            _id: null,
            running: {
              $sum: {
                $cond: ["$projectStatus.running", 1, 0],
              },
            },
            hold: {
              $sum: {
                $cond: ["$projectStatus.hold", 1, 0],
              },
            },
            archived: {
              $sum: {
                $cond: ["$projectStatus.archived", 1, 0],
              },
            },
            nogo: {
              $sum: {
                $cond: ["$projectStatus.nogo", 1, 0],
              },
            },
          },
        },
        { $project: { _id: 0 } },
      ]);
      if (result) {
        cb(null, result, project + constants.response_messages.get_success);
      } else {
        cb(true, null, project + constants.response_messages.get_failed);
      }
    } catch (err) {
      console.log("err : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },
};

export default ProjectObjects;
