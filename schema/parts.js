import mongoose from "mongoose";
import Random from "../helpers/random.js";
const partsSchema = new mongoose.Schema({
  partId: {
    type: String,
    default: Random.DocId(12),
  },
  serialNo: {
    type: String,
    required: "Serial no. can't be empty",
  },
  partNo: {
    type: String,
    min: 0,
    required: "Part no. can't be empty",
  },
  supplyPrice: {
    type: Number,
    min: 0,
    required: "Price can't be empty",
  },
  description: {
    type: String,
  },
  createdBy: {
    type: String,
    required: "Created by Id can't be empty",
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    //1 = active, 2 = inactive
    type: Number,
    default: 1,
    min: 1,
    max: 2,
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

const parts = mongoose.model("parts", partsSchema);
export default parts;
