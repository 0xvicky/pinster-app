import mongoose from "mongoose";
import PinSchema from "../models/pinSchema.js";
import User from "../models/userSchema.js";

export const getAllPinsCtrl = async (req, res) => {
  try {
    const pins = await PinSchema.find({});
    res.status(200).json(pins);
  } catch (error) {
    console.log("Error occured while fetching all pins", error);
    res.status(500).json(error);
  }
};

export const addPinCtrl = async (req, res) => {
  // const {title, }
  const pin = req.body;
  const _id = req.userId;
  console.log(_id);
  const user = await User.findOne({_id});
  console.log(user);
  pin.createdAt = new Date();
  pin.creator = {...user._doc};
  try {
    const newPin = new PinSchema(pin);
    await newPin.save();
    res.status(201).json(newPin);
  } catch (error) {
    console.log(`Error occured while adding pin:${error}`);
    res.status(500).json({msg: "Internal server error"});
  }
};
