import { useEffect } from "react";
import { useVideo } from "../hooks/useVideo";
import CategoryFilter from "../components/CategoryFilter";
import VideoCard from "../components/VideoCard";

const Home = (): JSX.Element => {
  const { fetchVideos, videos, error } = useVideo();

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <div className="max-w-full overflow-hidden">
        <div className="flex-1 px-4">
          <CategoryFilter />
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {videos.map((video: any) => (
          <VideoCard
            key={video._id}
            videoId={video._id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            views={video.views}
            category={video.category}
            channelName={video.uploader?.username}
            channelId={video.channelId}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
