import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User";

export const registeredUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        message: "Email already in use",
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(210).json({
      message: "User Registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed, Internal Server error",
      error,
    });
  }
};
