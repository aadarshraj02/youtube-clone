import Video from "../model/Video";

export const addComment = async (req, res) => {
  const { videoId } = req.params;
  const { commentText } = req.body;

  if (!req.user) {
    return res
      .status(401)
      .json({ message: "You need to be signed in to comment." });
  }

  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    const newComment = {
      userId: req.user.id,
      username: req.user.username,
      commentText,
    };
    video.comments.push(newComment);
    await video.save();

    res
      .status(201)
      .json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};
