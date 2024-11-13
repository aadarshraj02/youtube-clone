
import VideoPlayer from "../components/VideoPlayer";
import RecommendedVideo from "../components/RecommendedVideo";

const VideoPlayerPage = (): JSX.Element => {
  return (
    <div>
     
      <div className="flex">
        <VideoPlayer />
        <div>
          <RecommendedVideo />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
