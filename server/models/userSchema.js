import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  id: {type: String},
  created: {type: [String], default: []},
  saved: {type: [String], default: []}
});

const UserSchema = mongoose.model("UserSchema", userSchema);

export default UserSchema;
