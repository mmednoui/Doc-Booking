import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth.middleware";
import { getUser, getUserHotels } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/hotels", verifyToken, getUserHotels);

userRouter.get("/me", verifyToken, getUser);

export default userRouter;
