import mongoose from "mongoose";
var Schema = mongoose.Schema.Types,
  ObjectId = Schema.ObjectId;
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username can't be empty",
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: "Role can't be empty",
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  permissions: {
    read: {
      type: Boolean,
      default: false,
    },
    write: {
      type: Boolean,
      default: false,
    },
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const admins = mongoose.model("admins", adminSchema);

// module.exports = admins;
export default admins;
