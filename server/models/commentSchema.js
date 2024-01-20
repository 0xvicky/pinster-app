import mongoose from "mongoose";
import User from "./userSchema.js";

const commentSchema = new mongoose.Schema({
  text: {type: String},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: User},
  createdAt: {type: Date, default: Date.now}
});

const CommentModel = mongoose.model("CommentSchema", commentSchema);

export default CommentModel;
