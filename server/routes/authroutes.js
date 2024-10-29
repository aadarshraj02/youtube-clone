import express from "express";
import { registeredUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registeredUser);
router.post("/login", loginUser);

export default router;
