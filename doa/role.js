import roles from "../schema/roles.js";
import Bcrypt from "../middlewares/hashHandle.js";
import CreateJWTToken from "../helpers/jwtToken.js";
import { constants } from "../constants.js";

const role = "Role";

const RoleObjects = {
  createRole: async (data, cb) => {
    try {
      const result = await new roles(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, role + constants.response_messages.created);
      } else {
        cb(true, null, role + constants.response_messages.failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  updateRole: async (data, cb) => {
    const id = data.role_id;
    try {
      const result = await roles.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (result) {
        cb(null, result, role + constants.response_messages.updated);
      } else {
        cb(true, null, constants.response_messages.updated_failed + role);
      }
    } catch (err) {
      console.log("err : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getRoles: async (data, cb) => {
    try {
      const result = await roles.find();
      if (result) {
        cb(null, result, role + constants.response_messages.get_success);
      } else {
        cb(true, null, role + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, role + constants.response_messages.failed);
    }
  },

  getRole: async (data, cb) => {
    const { id } = data;
    try {
      const result = await roles.findById(id);
      if (result) {
        cb(null, result, role + constants.response_messages.get_success);
      } else {
        cb(true, null, role + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },

  deleteRole: async (data, cb) => {
    const { id } = data;
    try {
      const result = await roles.findByIdAndDelete(id);
      if (result) {
        cb(null, result, role + constants.response_messages.deleted);
      } else {
        cb(true, null, role + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },
};

export default RoleObjects;
