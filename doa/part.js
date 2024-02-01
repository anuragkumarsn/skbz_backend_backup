import parts from "../schema/parts.js";
import { constants } from "../constants.js";
const part = "Part";

const PartObjects = {
  addPart: async (data, cb) => {
    try {
      const result = await new parts(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, part + constants.response_messages.created);
      } else {
        cb(true, null, part + constants.response_messages.failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getParts: async (data, cb) => {
    try {
      const result = await parts.find({});
      if (result) {
        cb(null, result, part + constants.response_messages.get_success);
      } else {
        cb(true, null, part + constants.response_messages.get_failed);
      }
    } catch (err) {
      console.log("err : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },
  getPart: async (data, cb) => {
    const id = data.id;
    try {
      const result = await parts.findById(id);
      if (result) {
        cb(null, result, part + constants.response_messages.get_success);
      } else {
        cb(true, null, part + constants.response_messages.get_failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },
  deletePart: async (data, cb) => {
    const id = data.id;
    try {
      const result = await parts.findByIdAndDelete(id);
      if (result) {
        cb(null, result, part + constants.response_messages.deleted);
      } else {
        cb(true, null, part + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  updatePart: async (data, cb) => {
    const id = data.part_id;
    try {
      const result = await parts.findByIdAndUpdate(id, data, { new: true });
      if (result) {
        cb(null, result, part + constants.response_messages.updated);
      } else {
        cb(true, null, constants.response_messages.updated_failed + part);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },
};

export default PartObjects;
