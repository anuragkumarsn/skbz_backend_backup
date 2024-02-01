import mongoose from "mongoose";
var Schema = mongoose.Schema.Types,
  ObjectId = Schema.ObjectId;
const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: "Role can't be empty",
  },
  roleId: {
    type: String,
    required: "Role ID can't be empty",
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Number,
    default: 1,
    min: 1,
    max: 2,
  },
  is_deleted: {
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

const roles = mongoose.model("roles", roleSchema);

// module.exports = admins;
export default roles;
