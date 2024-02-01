import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route";

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});
