import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import channelReducer from "./slices/channelSlices.ts";
import videoReducer from "./slices/videoSlice.ts";

const store = configureStore({
  reducer: {
    auth: authReducer,
    channel: channelReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
