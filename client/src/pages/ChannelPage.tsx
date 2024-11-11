import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useChannel } from "../hooks/useChannel";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaRegBell } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const ChannelPage: React.FC = () => {
  const { id: channelId } = useParams<{ id: string }>();
  const { channel, fetchChannel } = useChannel();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (channelId) {
      fetchChannel(channelId);
    }
  }, [channelId, fetchChannel]);

  const handleEdit = () => {
    console.log("edit clicked");
  };
  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="px-8">
      <div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start bg-zinc-600 p-3 text-zinc-100 rounded-lg">
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
                <h2 className="text-xl ml-3 text-gray-400 lowercase">
                  @{channel?.channelName}
                </h2>
                <p className="text-sm ml-3 text-gray-400">
                  {channel?.subscribers} subscribers
                </p>
              </div>
              <p className="sm:text-lg mt-1 sm:mt-3 ml-3 w-full overflow-hidden">
                {channel?.description}
              </p>
              {channel?.owner?._id !== user?.id && (
                <button className="bg-blue-500 mt-4 ml-3 text-white px-4 py-2 rounded-md hover:opacity-70 transition-all duration-300 ease-linear flex items-center gap-1">
                  <FaRegBell /> Subscribe
                </button>
              )}
            </div>
            {channel?.owner?._id === user?.id && (
              <div className="flex mt-4 ml-3 gap-4">
                <button
                  onClick={handleEdit}
                  className="bg-blue-500 px-2 py-1 text-white rounded-md  hover:opacity-70 transition-all duration-300 ease-linear flex items-center gap-1"
                >
                  <MdEdit /> Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 px-2 py-1 text-white rounded-md  hover:opacity-70 transition-all duration-300 ease-linear flex items-center gap-1"
                >
                  <MdDelete /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-b my-5">
        <p className="text-2xl mx-2 text-center sm:text-left">Videos</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
        <VideoCard />
      </div>
    </div>
  );
};

export default ChannelPage;
