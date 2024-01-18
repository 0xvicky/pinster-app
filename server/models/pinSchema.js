import mongoose from "mongoose";
import UserSchema from "./userSchema.ts";
import CommentSchema from "./commentSchema.ts";

const pinSchema = new mongoose.Schema({
  title: {type: String},
  creator: {type: UserSchema},
  createdAt: {type: Date},
  savedBy: {type: [String]},
  comments: {type: [CommentSchema]}
});

const PinSchema = mongoose.model("PinSchema", pinSchema);

export default PinSchema;
