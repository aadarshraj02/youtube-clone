import express from "express";
import {
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/:videoId", addComment);
router.put("/:videoId/:commentId", updateComment);
router.delete("/:videoId/:commentId", deleteComment);

export default router;
