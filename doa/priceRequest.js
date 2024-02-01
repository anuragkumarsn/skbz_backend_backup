import priceRequest from "../schema/priceRequest.js";
import { constants } from "../constants.js";

const price_req = "Price Request";

const PriceRequestObjects = {
  createPriceRequest: async (data, cb) => {
    try {
      const result = await new priceRequest(data);
      const result_save = await result.save();
      if (result_save) {
        cb(null, result_save, price_req + constants.response_messages.created);
      } else {
        cb(true, null, price_req + constants.response_messages.failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  updatePriceRequest: async (data, cb) => {
    const id = data.price_request_id;
    try {
      //const projectResult = await projects.findOne({_id:data.project_id});
      const result = await priceRequest.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (result) {
        cb(null, result, price_req + constants.response_messages.updated);
      } else {
        cb(true, null, constants.response_messages.updated_failed + price_req);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.wrong);
    }
  },

  getPriceRequests: async (data, cb) => {
    try {
      const result = await priceRequest.find();
      if (result) {
        cb(null, result, price_req + constants.response_messages.get_success);
      } else {
        cb(true, null, price_req + constants.response_messages.get_failed);
      }
    } catch (err) {
      cb(err, null, role + constants.response_messages.failed);
    }
  },

  deletePriceRequest: async (data, cb) => {
    const { id } = data;
    try {
      const result = await priceRequest.findByIdAndDelete(id);
      if (result) {
        cb(null, result, price_req + constants.response_messages.deleted);
      } else {
        cb(true, null, price_req + constants.response_messages.delete_failed);
      }
    } catch (err) {
      cb(err, null, constants.response_messages.failed);
    }
  },
};

export default PriceRequestObjects;
