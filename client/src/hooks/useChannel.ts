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
      return response.data;
    } catch (error: any) {
      dispatch(
        setError(error.response.data.message || "Failed to create channel")
      );
      throw error;
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
        if (response.status === 200) {
          dispatch(setUserChannel(response.data));
        }
      } catch (error: any) {
        if (error.response?.status === 404) {
          dispatch(setUserChannel(null));
        } else {
          console.error("Error fetching user's channel:", error);
          dispatch(
            setError(
              error.response?.data?.message || "Failed to fetch user's channel"
            )
          );
        }
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
