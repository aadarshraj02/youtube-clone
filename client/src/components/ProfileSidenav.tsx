import { IoMdClose } from "react-icons/io";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BiSolidVideoPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/slices/authSlice";

interface ProfileSidenavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const ProfileSidenav = ({
  isOpen,
  toggleSidebar,
}: ProfileSidenavProps): JSX.Element => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toggleSidebar();
    navigate("/");
  };

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
        <Link to="/">
          <img src="./youtubelogo.jpg" alt="YouTube Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {isAuthenticated && user ? (
          <>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full self-center"
            />
            <h2 className="text-lg font-semibold text-center">
              {user.username}
            </h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/profile" className="flex gap-2 items-center">
                  <CgProfile /> User Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/create-channel" className="flex items-center gap-2">
                  <BiSolidVideoPlus /> Create Channel
                </Link>
              </li>
              <li className="mb-2">
                <button className="flex items-center gap-2">
                  <FcAbout /> About Us
                </button>
              </li>
              <li className="mb-2">
                <button className="flex items-center gap-2">
                  <GrContact /> Contact Us
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <CiLogout size={24} /> Logout
                </button>
              </li>
            </ul>
          </>
        ) : (
          <ul className="list-none">
            <li className="mb-2">
              <Link to="/login" className="flex gap-2 items-center">
                <CiLogin size={24} /> Login
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/signup" className="flex items-center gap-2">
                <IoCreateOutline size={24} /> Signup
              </Link>
            </li>
            <li className="mb-2">
              <button className="flex items-center gap-2">
                <FcAbout /> About Us
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center gap-2">
                <GrContact /> Contact Us
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileSidenav;
