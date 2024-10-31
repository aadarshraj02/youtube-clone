import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <Navbar onToggleSidebar={toggleSidebar} />
      </div>
      <div>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
    </>
  );
};

export default Home;
