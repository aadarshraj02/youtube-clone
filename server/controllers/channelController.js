import Channel from "../model/Channel.js";
import User from "../model/User.js";
import { formatCount } from "../utilities/formatCount.js";

export const createChannel = async (req, res) => {
  try {
    const { channelName, description } = req.body;

    const randomSubscribers = Math.floor(Math.random() * 10000 + 800);

    const channel = new Channel({
      channelName,
      description,
      owner: req.user.id,
      subscribers: randomSubscribers,
    });

    const savedChannel = await channel.save();
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $push: { channels: savedChannel._id },
      });
    } catch (updateError) {
      console.error("Error updating user channels:", updateError);
      return res.status(500).json({
        message: "Channel created, but failed to update user's channels array",
        error: updateError,
      });
    }

    res.status(201).json({
      id: savedChannel._id,
      channelName: savedChannel.channelName,
      description: savedChannel.description,
      subscribers: savedChannel.subscribers,
      owner: savedChannel.owner,
    });
  } catch (error) {
    console.error("Error creating channel:", error);
    return res.status(500).json({
      message: "Error creating channel",
      error,
    });
  }
};

export const getChannel = async (req, res) => {
  const { channelId } = req.params;

  try {
    const channel = await Channel.findById(channelId)
      .populate("videos")
      .populate("owner", "username avatar");

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }
    console.log("Fetched channel:", channel);
    const formattedChannel = {
      ...channel.toObject(),
      subscribers: formatCount(channel.subscribers),
      avatar: channel.owner.avatar,
    };

    res.json(formattedChannel);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching channel", error });
  }
};

export const getUserChannel = async (req, res) => {
  try {
    const userChannel = await Channel.findOne({ owner: req.user.id });
    if (!userChannel) {
      return res.status(404).json({ message: "Channel not found" });
    }
    res.json(userChannel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user channel", error });
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
