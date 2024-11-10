import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannel } from "../redux/slices/channelSlices";
import { RootState, AppDispatch } from "../redux/store";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const ChannelPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id: channelId } = useParams<{ id: string }>();
  const { channel, status, error } = useSelector(
    (state: RootState) => state.channel
  );

  useEffect(() => {
    if (channelId) {
      dispatch(fetchChannel(channelId));
    }
  }, [dispatch, channelId]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="px-8">
      <div className="">
        <div className="flex">
          <img
            src={channel?.owner?.avatar}
            alt={`${channel?.channelName} avatar`}
            className="w-[20vw] h-[20vw] rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 ml-3 capitalize">
              {channel?.channelName}
            </h1>
            <div>
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="text-xl ml-3 text-gray-500 lowercase">
                  @{channel?.channelName}
                </h2>
                <p className="text-sm ml-3  text-gray-600">
                  {channel?.subscribers} subscribers
                </p>
              </div>
              <p className="sm:text-lg mt-4 ml-3 ">{channel?.description}</p>
              <button className="bg-black mt-4 ml-3 text-white px-4 py-2 rounded-md hover:opacity-70 transition-all duration-300 ease-linear">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b my-5">
        <p className="text-2xl mx-2 text-center sm:text-left">Videos</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <VideoCard />
      </div>
    </div>
  );
};

export default ChannelPage;
