import initialDocs from "../schema/initialDocs.js";
import { constants } from "../constants.js";

const document = "Document";

const InitialDocsObject = {
  addInitialDoc: async (data, cb) => {
    try {
      const result = await new initialDocs(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, document + constants.response_messages.registred);
      } else {
        cb(true, null, document + constants.response_messages.register_failed);
      }
    } catch (err) {
      console.log("ERR : ", err);
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getInitialDocs: async (data, cb) => {
    try {
      const result = await initialDocs.find();
      if (result) {
        cb(null, result, document + constants.response_messages.get_success);
      } else {
        cb(true, null, document + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, document + constants.response_messages.failed);
    }
  },

  getInitialDocById: async (data, cb) => {
    const { id } = data;
    try {
      const result = await initialDocs.findById(id);
      if (result) {
        cb(null, result, document + constants.response_messages.get_success);
      } else {
        cb(true, null, document + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },

  deleteInitialDocs: async (data, cb) => {
    const { id } = data;
    try {
      const result = await initialDocs.findByIdAndDelete(id);
      if (result) {
        cb(null, result, document + constants.response_messages.deleted);
      } else {
        cb(true, null, document + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },

  updateInitialDocs: async (data, cb) => {
    const id = data.document_id;
    try {
      if (!data.initialDocId || !data.userId || !data.projectId) {
        return cb(true, null, constants.response_messages.required_field);
      }
      const result = await initialDocs.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (result) {
        cb(null, result, document + constants.response_messages.updated);
      } else {
        cb(true, null, constants.response_messages.updated_failed + document);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },
};

export default InitialDocsObject;
