import express from "express";
import { signin, signup } from "../controllers/auth.controller";
import { check } from "express-validator";
const authRouter = express.Router();

authRouter.post(
  "/signup",
  [
    check("firstname", "First Name is required").isString(),
    check("lastname", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  signup
);
authRouter.post(
  "/signin",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  signin
);

export default authRouter;
