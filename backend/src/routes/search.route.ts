import express from "express";
import {
  createBooking,
  createPaymentIntent,
  hotelDetail,
  searchHotels,
} from "../controllers/search.controller";
import { param } from "express-validator";
import Stripe from "stripe";
import verifyToken from "../middleware/auth.middleware";

const searchRouter = express.Router();

searchRouter.get("/hotels", searchHotels);

searchRouter.get(
  "/:id",
  [param("id").notEmpty().withMessage("Hotel ID is required")],
  hotelDetail
);

searchRouter.post(
  "/:hotelId/bookings/payment-intent",
  verifyToken,
  createPaymentIntent
);

searchRouter.post("/:hotelId/bookings", verifyToken, createBooking);
export default searchRouter;
