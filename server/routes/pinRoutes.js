import express from "express";
import {getAllPinsCtrl, addPinCtrl} from "../controllers/pinController.js";
import {authMiddleware} from "../middlewares/middleware.js";
const router = express.Router();

router.get("/", getAllPinsCtrl);
router.post("/addPin", authMiddleware, addPinCtrl);

export default router;
