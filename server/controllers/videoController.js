import Video from "../model/Video.js";
import cloudinary from "../config/cloudinaryConfig.js";

export const uploadVideo = async (req, res) => {
  const { title, description, thumbnailUrl } = req.body;
  const file = req.files.video;

  if (!title || !thumbnailUrl || !file) {
    return res.status(400).json({
      message: "Title, thumbnail, and video file are required",
    });
  }

  try {
    const uploadResponse = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "video",
    });

    const newVideo = new Video({
      title,
      description,
      thumbnailUrl,
      videoUrl: uploadResponse.secure_url,
      uploader: req.user.id,
      views: 0,
      likes: 0,
      dislikes: 0,
    });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
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

export const getVideoById = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id)
      .populate("uploader", "username")
      .exec();
    if (!video)
      return res.status(404).json({
        message: "Video not found",
      });
    res.json(video);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching video",
      error,
    });
  }
};

export const updateVideo = async (req, res) => {
  const { id } = req.params;

  const { title, description, thumbnailUrl } = req.body;

  try {
    const updatedVideo = await Video.findByIdAndUpdate(id, {
      title,
      description,
      thumbnailUrl,
    });
    if (!updateVideo)
      return res.status(404).json({
        message: "Video not found",
      });
    res.json(updatedVideo);
  } catch (error) {
    return res.status(500).json({
      message: "Unable to update video",
      error,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVideo = await Video.findByIdAndDelete(id);
    if (!deletedVideo)
      return res.status(404).json({
        message: "Video not found",
      });
    res.status(200).json({
      message: "Video deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to delete video",
      error,
    });
  }
};
