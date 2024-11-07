import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

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
        <img src="./youtubelogo.jpg" alt="YouTube Logo" className="md:h-14 h-10" />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search videos here"
          className="border rounded-full px-3 py-1 sm:w-[25vw] w-[30vw]"
        />
        <IoSearchOutline className="text-gray-500" size={20} />
      </div>
      <button className="text-sm font-semibold flex items-center gap-1 border px-2 py-1 rounded-full "><CgProfile size={18} /> Profile</button>
    </nav>
  );
};

export default Navbar;
