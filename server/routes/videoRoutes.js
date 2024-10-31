import express from "express";
import {
  uploadVideo,
  getAllVideos,
  getVideoWithComments,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

router.post("/upload", verifyToken, upload.single("video"), uploadVideo);
router.get("/", getAllVideos);
router.get("/:id", getVideoWithComments);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);

export default router;
