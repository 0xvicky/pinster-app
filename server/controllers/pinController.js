import mongoose from "mongoose";
import PinSchema from "../models/pinSchema.js";
import User from "../models/userSchema.js";

export const getAllPins = async (req, res) => {
  try {
    const pins = await PinSchema.find({});
    res.status(200).json(pins);
  } catch (error) {
    console.log("Error occured while fetching all pins", error);
    res.status(500).json(error);
  }
};

export const addPin = async (req, res) => {
  // const {title, }
  const pin = req.body;
  const {id: _id} = req.userId;
  const user = await User.findOne({_id});
  pin.createdAt = new Date();
  pin.creator = user;
  try {
    const newPin = new PinSchema(pin);
    await newPin.save();
    res.status(201).json(newPin);
  } catch (error) {
    console.log(`Error occured while adding pin:${error}`);
    res.status(500).json({msg: "Interne server error"});
  }
};
