import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useChannel } from "../hooks/useChannel";

const ChannelPage: React.FC = () => {
  const { id: channelId } = useParams<{ id: string }>();
  const { channel, fetchChannel } = useChannel();

  useEffect(() => {
    if (channelId) {
      fetchChannel(channelId);
    }
  }, [channelId, fetchChannel]);

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
                <p className="text-sm ml-3 text-gray-600">
                  {channel?.subscribers} subscribers
                </p>
              </div>
              <p className="sm:text-lg mt-3 ml-3 w-full sm:w-2/3 md:w-1/2 overflow-hidden">
                {channel?.description}
              </p>
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
