import Video from "../model/Video";

export const uploadVideo = async (req, res) => {
  const { title, description, thumbnailUrl } = req.body;

  if (!title || !thumbnailUrl)
    return res.status(400).json({
      message: "Title and thumbnail are required",
    });

  try {
    const newVideo = new Video({
      title,
      description,
      thumbnailUrl,
      uploader: req.user.id,
      views: 0,
      likes: 0,
      dislikes: 0,
    });
    await newVideo.save();
    res.status(201).json({ message: "Video uploaded successfully!" }, newVideo);
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
