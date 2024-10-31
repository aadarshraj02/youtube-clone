import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
      <RxHamburgerMenu/>

      <img src="./youtubelogo.jpg" alt="youtube-logo" className="h-14"  />
      </div>
      <div className="flex items-center gap-2">

      <input className="border rounded-full px-3 py-1 w-[25vw]" placeholder="search videos here" />
      <IoSearchOutline className="text-zinc-500" size={20} />
      </div>
      <button>Profile</button>
    </nav>
  );
};

export default Navbar;
