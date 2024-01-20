import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  id: {type: String},
  created: {type: [String], default: []},
  saved: {type: [String], default: []}
});

const User = mongoose.model("User", userSchema);

export default User;
