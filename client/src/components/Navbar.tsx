import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import CategoryFilter from "./CategoryFilter";

const Navbar = ({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}): JSX.Element => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <RxHamburgerMenu
            onClick={onToggleSidebar}
            className="cursor-pointer"
          />
          <img src="./youtubelogo.jpg" alt="youtube-logo" className="h-14" />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="border rounded-full px-3 py-1 w-[25vw]"
            placeholder="search videos here"
          />
          <IoSearchOutline className="text-zinc-500" size={20} />
        </div>
        <button>Profile</button>
      </nav>
      <CategoryFilter />
    </>
  );
};

export default Navbar;
