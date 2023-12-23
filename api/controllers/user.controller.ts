import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/index.js";
import { generateToken } from "../utils/generateToken.util.js";
import { CustomRequest } from "../interfaces/index.js";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  console.log("trigger");
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error(`Please fill in all required fields`);
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error(`Password must be upto 6 characters`);
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    const { _id, username, email, photo, authMethod } = user;
    generateToken(res, _id);
    res.status(201).json({ _id, username, email, photo, authMethod });
  } else {
    res.status(400);
    throw new Error(`Invalid user data`);
  }
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (passwordIsCorrect) {
    generateToken(res, user._id);
  }
  if (user && passwordIsCorrect) {
    const { _id, username, email, photo, authMethod } = user;
    res.status(200).json({
      _id,
      username,
      email,
      photo,
      authMethod,
    });
  } else {
    res.status(401);
    throw new Error("Invalid user data");
  }
});

export { registerUser, loginUser };
