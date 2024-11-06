import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}): JSX.Element => {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <RxHamburgerMenu
          onClick={onToggleSidebar}
          className="cursor-pointer"
          size={24}
        />
        <img src="./youtubelogo.jpg" alt="YouTube Logo" className="h-10" />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search videos here"
          className="border rounded-full px-3 py-1 w-[25vw]"
        />
        <IoSearchOutline className="text-gray-500" size={20} />
      </div>
      <button className="text-sm font-semibold">Profile</button>
    </nav>
  );
};

export default Navbar;
