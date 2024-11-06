import { MdHome, MdSubscriptions, MdPlaylistPlay } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}): JSX.Element => {
  const menuItems = [
    {
      name: "Home",
      icon: <MdHome size={24} />,
    },
    {
      name: "Subscriptions",
      icon: <MdSubscriptions size={24} />,
    },
    {
      name: "History",
      icon: <FaHistory size={24} />,
    },
    {
      name: "Playlist",
      icon: <MdPlaylistPlay size={24} />,
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white z-10 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <RxHamburgerMenu
          onClick={toggleSidebar}
          className="cursor-pointer"
          size={24}
        />
        <img src="./youtubelogo.jpg" alt="YouTube Logo" className="h-10" />
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {item.icon}
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
