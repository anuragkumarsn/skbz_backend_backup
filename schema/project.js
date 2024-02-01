import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  rfqs: {
    type: String,
    required: true,
  },
  clientAddress: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  clientLogo: {
    type: Array,
    required: false,
  },
  companyDocs: {
    type: Array,
    required: false,
  },
  otherDocs: {
    type: Array,
    required: false,
  },
  projectStatus: {
    running: {
      type: Boolean,
      required: false,
      default: false,
    },
    archived: {
      type: Boolean,
      required: false,
      default: false,
    },
    hold: {
      type: Boolean,
      required: false,
      default: false,
    },
    nogo: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const projects = mongoose.model("projects", projectSchema);

export default projects;
