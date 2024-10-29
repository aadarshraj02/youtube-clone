import express from "express";
import {
  uploadVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", verifyToken, uploadVideo);
router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);

export default router;
