import express, { Request, Response } from "express";

import { signin, signout, signup } from "../controllers/auth.controller";
import { check } from "express-validator";
import verifyToken from "../middleware/auth.middleware";

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
authRouter.get(
  "/validate-token",
  verifyToken,
  (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
  }
);

authRouter.post("/signout", signout);

export default authRouter;
