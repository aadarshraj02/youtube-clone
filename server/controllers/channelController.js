import Channel from "../model/Channel.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, description } = req.body;
    // const ownerId = req.user._id;

    const channel = new Channel({
      channelName,
      description,
      owner: req.user.id,
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
  const { channelId } = req.params;

  try {
    const channel = await Channel.findById(channelId).populate("videos");
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }
    res.json(channel);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching channel",
      error,
    });
  }
};

export const updateChannel = async (req, res) => {
  const { channelId } = req.params;
  const { channelName, description, channelBanner } = req.body;

  try {
    const updatedChannel = await Channel.findByIdAndUpdate(
      channelId,
      { channelName, description, channelBanner },
      { new: true }
    );

    if (!updatedChannel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.json(updatedChannel);
  } catch (error) {
    res.status(500).json({ message: "Error updating channel", error });
  }
};

export const deleteChannel = async (req, res) => {
  const { channelId } = req.params;

  try {
    const deletedChannel = await Channel.findByIdAndDelete(channelId);

    if (!deletedChannel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.json({ message: "Channel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting channel", error });
  }
};
