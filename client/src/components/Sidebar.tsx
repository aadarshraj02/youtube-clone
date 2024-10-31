import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";

const Sidebar = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
  const menuItems = [
    {
      name: "Home",
      icon: <MdHome />,
    },
    {
      name: "Subscriptions",
      icon: <MdSubscriptions />,
    },
    {
      name: "History",
      icon: <FaHistory />,
    },
    {
      name: "Playlist",
      icon: <MdPlaylistPlay />,
    },
  ];
  return (
    <div
      className={`px-4 h-screen w-48 transition-transform duration-300 ease-linear ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <div className="flex items-center">
        <RxHamburgerMenu />
        <img src="./youtubelogo.jpg" alt="youtube-logo" className="h-14" />
      </div> */}
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-3">
            {item.icon}
            <h3 className="text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
