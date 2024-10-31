import Video from "../model/Video.js";

export const addComment = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { commentText } = req.body;
    const userId = req.user.id;
    const username = req.user.username;

    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const newComment = {
      userId,
      username,
      commentText,
      timestamp: new Date(),
    };
    video.comments.push(newComment);
    await video.save();

    res.status(201).json({ message: "Comment added successfully", newComment });
  } catch (error) {
    res.status(500).json({ message: "Unable to add comment", error });
  }
}; 
