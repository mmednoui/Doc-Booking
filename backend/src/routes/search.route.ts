import express from "express";
import { searchHotels } from "../controllers/search.controller";

const searchRouter = express.Router();

searchRouter.get("/hotels", searchHotels);

export default searchRouter;
