import { Router } from "express";
import { createNewUser, loginUser } from "../Controllers/user.controller";

const userRouter = Router();

userRouter.post("/createuser", createNewUser);
userRouter.post("/loginser", loginUser);

export default userRouter;
