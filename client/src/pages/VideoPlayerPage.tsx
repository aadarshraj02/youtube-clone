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
      <div className="max-w-full overflow-hidden">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="flex">
          <div
            className={`transition-all duration-300 ease-linear ${
              isSidebarOpen ? "w-56" : "w-0"
            }`}
          >
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
      <div className="flex">
        <VideoPlayer />
        <RecommendedVideo />
      </div>
    </div>
  );
};

export default VideoPlayerPage;
