import { useNavigate } from "react-router-dom";

interface VideoCardProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  category: string;
  channelName?: string;
  channelId?: string;
}

const formatCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return count.toString();
  }
};

const VideoCard = ({
  videoId,
  title,
  thumbnailUrl,
  views,
  category,
  channelName,
  channelId,
}: VideoCardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleVideoClick = () => navigate(`/video/${videoId}`);
  const handleChannelClick = () => {
    if (channelId) {
      navigate(`/channel/${channelId}`);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-all duration-300 ease-linear cursor-pointer"
      onClick={handleVideoClick}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="rounded-lg h-40 w-full object-cover"
      />
      <h3 className="mt-2 font-semibold text-lg uppercase">{title}</h3>
      <p className="text-gray-600">{formatCount(views)} views</p>
      <p className="text-gray-500 text-sm">Category: {category}</p>
      {channelName && (
        <p
          className=" hover:underline "
          onClick={(e) => {
            e.stopPropagation();
            handleChannelClick();
          }}
        >
          Uploaded by: @{channelName}
        </p>
      )}
    </div>
  );
};

export default VideoCard;
