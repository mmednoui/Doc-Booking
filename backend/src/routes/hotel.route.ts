import verifyToken from "../middleware/auth.middleware";
import { body } from "express-validator";
import multer from "multer";
import {
  createHotel,
  editHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.controller";
import express from "express";

const hotelRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

hotelRouter.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ],
  upload.array("imageFiles", 6),
  createHotel
);

hotelRouter.get("/:id", verifyToken, getHotel);
hotelRouter.put(
  "/:hotelId",
  verifyToken,
  upload.array("imageFiles"),
  editHotel
);

hotelRouter.get("/", getHotels);

export default hotelRouter;
