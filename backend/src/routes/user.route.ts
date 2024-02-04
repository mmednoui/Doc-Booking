import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth.middleware";
import Hotel from "../models/hotel.model";

const userRouter = express.Router();

userRouter.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find({ userId: req.userId });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

export default userRouter;
