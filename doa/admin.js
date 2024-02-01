import admins from "../schema/admin.js";
import Bcrypt from "../middlewares/hashHandle.js";
import CreateJWTToken from "../helpers/jwtToken.js";
import { constants } from "../constants.js";

const admin = "Admin";
const users = "Users";

const AdminObjects = {
  registerAdmin: async (data, cb) => {
    try {
      const result = await new admins(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, admin + constants.response_messages.registred);
      } else {
        cb(true, null, admin + constants.response_messages.register_failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      const isUserPresent =
        err.code === 11000 ? Object.values(err.keyValue)[0] : "";
      cb(
        err,
        null,
        isUserPresent + " is" + constants.response_messages.isPresent
      );
    }
  },

  loginAdmin: async (data, cb) => {
    const { username, password } = data;
    const token = "Token";
    try {
      const result = await admins.aggregate([
        {
          $match: { username: username },
        },
        {
          $lookup: {
            from: "roles",
            localField: "role",
            foreignField: "roleId",
            as: "roles",
          },
        },
      ]);
      if (result) {
        Bcrypt.compairHash(
          { password, hashPassword: result[0]?.password },
          (resp) => {
            if (resp.veryfied) {
              CreateJWTToken(result[0], (resp) => {
                const data = { ...result[0], token: resp?.token };
                if (resp.created) {
                  cb(
                    null,
                    data,
                    admin + constants.response_messages.login_success
                  );
                } else {
                  cb(true, null, token + constants.response_messages.failed);
                }
              });
            } else {
              cb(true, null, constants.response_messages.invalidCred);
            }
          }
        );
      } else {
        cb(true, null, constants.response_messages.invalidCred);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.failed);
    }
  },

  getAdmins: async (data, cb) => {
    try {
      const result = await admins.find();
      if (result) {
        cb(null, result, users + constants.response_messages.get_success);
      } else {
        cb(true, null, users + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, users + constants.response_messages.failed);
    }
  },

  getAdmin: async (data, cb) => {
    const { id } = data;
    try {
      const result = await admins.findById(id);
      if (result) {
        cb(null, result, users + constants.response_messages.get_success);
      } else {
        cb(true, null, users + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },

  deleteAdmin: async (data, cb) => {
    const { id } = data;
    try {
      const result = await admins.findByIdAndDelete(id);
      if (result) {
        cb(null, result, users + constants.response_messages.deleted);
      } else {
        cb(true, null, users + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },
};

export default AdminObjects;
