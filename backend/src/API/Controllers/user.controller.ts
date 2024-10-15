import USER_MODEL from "../Models/user.module";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const createNewUser = async (req: Request, res: Response) => {
  const { userName, userPass } = req.body;

  const password = await bcrypt.hash(userPass, 10);

  USER_MODEL.create({
    userName: userName,
    userPass: password,
  })
    .then((Cres) => {
      res.status(200).json({ user: Cres });
    })
    .catch((err) => {
      res.status(500).json({ error: true, errorMessage: err.message });
    });
};

const loginUser = async (req: any, res: any) => {
  try {
    const { userName, userPass } = req.body;

    const user = await USER_MODEL.findOne({ userName });

    if (!user) {
      return res.status(401).json({
        auth: false,
        errorMessage: "UserName or Password is incorrect",
      });
    }

    const isPasswordValid = await bcrypt.compare(userPass, user.userPass);

    if (!isPasswordValid) {
      return res.status(401).json({
        auth: false,
        errorMessage: "UserName or Password is incorrect",
      });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      auth: false,
      errorMessage: "An error occurred during login.",
    });
  }
};

export { createNewUser, loginUser };
