interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  views: number;
  category: string;
}

const formatCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return count.toString();
  }
};

const VideoCard = ({
  title,
  thumbnailUrl,
  views,
  category,
}: VideoCardProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-all duration-300 ease-linear cursor-pointer">
      <img
        src={thumbnailUrl}
        alt={title}
        className="rounded-lg h-40 w-full object-cover"
      />
      <h3 className="mt-2 font-semibold text-lg uppercase">{title}</h3>
      <p className="text-gray-600">{formatCount(views)} views</p>
      <p className="text-gray-500 text-sm">Category: {category}</p>
    </div>
  );
};

export default VideoCard;
