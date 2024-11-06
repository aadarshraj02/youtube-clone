import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CategoryFilter from "../components/CategoryFilter";
import VideoCard from "../components/VideoCard";

const Home = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
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
          <div className="flex-1 px-4">
            <CategoryFilter />
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </>
  );
};

export default Home;
