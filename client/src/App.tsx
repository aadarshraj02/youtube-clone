import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateChannelPage from "./pages/CreateChannelPage";
import ChannelPage from "./pages/ChannelPage";

const App = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <BrowserRouter>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/video/:id" element={<VideoPlayerPage />} />
          <Route path="/create-channel" element={<CreateChannelPage />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
