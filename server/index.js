import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import pinRoutes from "./routes/pinRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb"}));

app.use("/user", userRoutes);
app.use("/pins", pinRoutes);

const CONNECTION = process.env.CONNECTION;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`I am running on port, hurrah:${PORT} 👏👏`);
    });
  })
  .catch(err => {
    console.log(`I ran into an error:${err} 💀`);
  });
