import express from "express";
import {getAllPins} from "../controllers/pinController.js";
const router = express.Router();

router.get("/", getAllPins);

export default router;
