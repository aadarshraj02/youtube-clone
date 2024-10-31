import Video from "../model/Video.js";
import cloudinary from "../config/cloudinaryConfig.js";
import Channel from "../model/Channel.js";

export const uploadVideo = async (req, res) => {
  const { title, description, thumbnailUrl } = req.body;

  if (!title || !thumbnailUrl || !req.file)
    return res.status(400).json({
      message: "Title, thumbnail, and video file are required",
    });

  try {
    const userChannel = await Channel.findOne({ owner: req.user.id });
    if (!userChannel) {
      return res
        .status(400)
        .json({ message: "Please create a channel first." });
    }
    const fileBase64 = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(fileBase64, {
      resource_type: "video",
    });
    const newVideo = new Video({
      title,
      description,
      thumbnailUrl,
      videoUrl: result.secure_url,
      uploader: req.user.id,
      channelId: userChannel._id,
      views: 0,
      likes: 0,
      dislikes: 0,
    });

    const savedVideo = await newVideo.save();
    userChannel.videos.push(savedVideo._id);
    await userChannel.save();

    res.status(201).json(savedVideo);
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return res.status(500).json({
      message: "Error uploading video",
      error,
    });
  }
};
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("uploader", "username").exec();
    res.json(videos);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching videos",
      error,
    });
  }
};

export const getVideoWithComments = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id)
      .populate("uploader", "username")
      .populate({
        path: "comments.userId",
        select: "username",
      })
      .exec();

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    const formattedComments = video.comments.map((comment) => ({
      commentText: comment.commentText,
      username: comment.username,
      timestamp: comment.timestamp,
    }));

    res.json({ video, comments: formattedComments });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching video", error });
  }
};

export const updateVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, thumbnailUrl } = req.body;

  try {
    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const channel = await Channel.findById(video.channelId);
    if (channel.owner.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this video" });
    }

    video.title = title || video.title;
    video.description = description || video.description;
    video.thumbnailUrl = thumbnailUrl || video.thumbnailUrl;

    const updatedVideo = await video.save();
    res.json(updatedVideo);
  } catch (error) {
    return res.status(500).json({ message: "Unable to update video", error });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findByIdAndDelete(id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    const channel = await Channel.findById(video.channelId);
    if (channel.owner.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this video" });
    }

    channel.videos.pull(video._id);
    await channel.save();

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Unable to delete video", error });
  }
};
