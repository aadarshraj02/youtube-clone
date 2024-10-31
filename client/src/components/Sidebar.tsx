import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = (): JSX.Element => {
  return (
    <div>
      <div className="flex items-center">
        <RxHamburgerMenu />
        <img src="./youtubelogo.jpg" alt="youtube-logo" className="h-14" />
      </div>
    </div>
  );
};

export default Sidebar;
