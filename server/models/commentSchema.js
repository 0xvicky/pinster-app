import mongoose from "mongoose";
import UserSchema from "./userSchema.ts";

const commentSchema = new mongoose.Schema({
  text: {type: String},
  creator: {type: UserSchema},
  createdAt: Date
});

const CommentSchema = mongoose.model("CommentSchema", commentSchema);

export default CommentSchema;
