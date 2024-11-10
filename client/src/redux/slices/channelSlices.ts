import { createSlice } from "@reduxjs/toolkit";

interface Channel {
  _id: string;
  channelName: string;
  description: string;
  avatar: string;
  subscribers: number;
  videos: Array<any>;
  owner?: ChannelOwner;
}

interface ChannelOwner {
  avatar: string;
}

interface ChannelState {
  error: string | null;
  userChannel: {
    id: string;
    channelName: string;
    description: string;
  } | null;
  channel: Channel | null;
}

const initialState: ChannelState = {
  error: null,
  userChannel: null,
  channel: null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setUserChannel: (state, action) => {
      const channelData = action.payload;
      state.userChannel = {
        id: channelData._id,
        channelName: channelData.channelName,
        description: channelData.description,
      };
    },
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserChannel, setChannel, setError } = channelSlice.actions;
export default channelSlice.reducer;
