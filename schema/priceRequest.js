import mongoose from "mongoose";
import Random from "../helpers/random.js";

const priceRequestSchema = new mongoose.Schema({
  priceRequestId: {
    type: String,
    default: Random.DocId(12),
    required: "Initial doc Id can't be empty",
  },
  projectId: {
    type: String,
    required: "Project Id can't be empty",
  },
  notes: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
    required: "Price can't be empty",
  },
  requestedBy: {
    type: String,
    required: "Requested by Id can't be empty",
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  requestStatus: {
    //1 = Pending, 2 = Approved, 3 = Rejected
    type: Number,
    default: 1,
    min: 1,
    max: 3,
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

const projectrequest = mongoose.model("pricerequest", priceRequestSchema);
export default projectrequest;
