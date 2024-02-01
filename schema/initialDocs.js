import mongoose from "mongoose";
import Random from "../helpers/random.js";

const initialDocsSchema = new mongoose.Schema({
  initialDocId: {
    type: String,
    default: Random.DocId(12),
    required: "Initial doc Id can't be empty",
  },
  projectId: {
    type: String,
    required: "Project Id can't be empty",
  },
  userId: {
    type: String,
    required: "User Id can't be empty",
  },
  initialContract: {
    type: Array,
    required: false,
  },
  screenshot: {
    type: Array,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const initialDocs = mongoose.model("initialDocs", initialDocsSchema);

export default initialDocs;
