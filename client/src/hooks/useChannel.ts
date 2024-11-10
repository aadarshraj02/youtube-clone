import axios from "axios";
import {
  setUserChannel,
  setChannel,
  setError,
} from "../redux/slices/channelSlices";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

interface ChannelData {
  channelName: string;
  description: string;
}

export const useChannel = () => {
  const dispatch = useDispatch();
  const { userChannel, channel, error } = useSelector(
    (state: RootState) => state.channel
  );

  const createChannel = async (channelData: ChannelData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/channels",
        channelData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setUserChannel(response.data));
    } catch (error: any) {
      dispatch(
        setError(error.response.data.message || "Failed to create channel")
      );
    }
  };

  const fetchChannel = async (channelId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/channels/${channelId}`
      );
      dispatch(setChannel(response.data));
    } catch (error: any) {
      setError(error.response.data.message || "Failed to get channel");
    }
  };
  const fetchUserChannel = async () => {
    if (!userChannel) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/channels/user/channel",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(setUserChannel(response.data));
      } catch (error) {
        console.error("Error fetching user's channel:", error);
        dispatch(setUserChannel(null));
      }
    }
  };

  return {
    createChannel,
    fetchChannel,
    userChannel,
    fetchUserChannel,
    channel,
    error,
  };
};
