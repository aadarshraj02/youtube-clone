import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";
import RecommendedVideo from "../components/RecommendedVideo";

const VideoPlayerPage = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev: any) => !prev);
  };
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
