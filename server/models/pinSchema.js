import mongoose from "mongoose";
import User from "./userSchema.js";
import CommentSchema from "./commentSchema.js";

const pinSchema = new mongoose.Schema({
  title: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: User},
  createdAt: {type: Date},
  savedBy: {type: [String], default: []},
  likedBy: {type: [String], default: []},
  comments: {type: [mongoose.Schema.Types.ObjectId], ref: "CommentSchema", default: []},
  tags: {type: [String]},
  selectedFile: String
});

const PinSchema = mongoose.model("PinSchema", pinSchema);

export default PinSchema;
