import Channel from "../model/Channel.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, description } = req.body;
    const ownerId = req.user._id;

    const channel = new Channel({
      channelName,
      description,
      owner: ownerId,
    });
    const savedChannel = await channel.save();
    res.status(201).json(savedChannel);
  } catch (error) {
    return res.status(500).json({
      message: "Error creating channel",
      error,
    });
  }
};

export const getChannel = async (req, res) => {
  try {
  } catch (error) {
    const { channelId } = req.params;

    const channel = await Channel.findById(channelId).populate("videos");
    if (!channel)
      return res.status(404).json({
        message: "Channel not found",
      });
    res.json(channel);
    return res.status(500).json({
      message: "Error fetching channel",
      error,
    });
  }
};
