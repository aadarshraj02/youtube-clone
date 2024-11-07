import { IoMdClose } from "react-icons/io";

interface ProfileSidenavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const ProfileSidenav = ({
  isOpen,
  toggleSidebar,
}: ProfileSidenavProps): JSX.Element => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md rounded z-10 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <button onClick={toggleSidebar}>
          <IoMdClose />
        </button>
        <img src="./youtubelogo.jpg" alt="youtube logo" className="h-10" />
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <h2 className="text-lg font-semibold">Profile Options</h2>
        <ul className="list-none">
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Signup</button>
          </li>
          <li>
            <button>profile</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidenav;
