import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoPlayer = (): JSX.Element => {
  return (
    <div className="w-full lg:w-3/4 py-4 sm:px-8 px-2">
      <div className="w-full">
        <div
          className="w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[40vh] xl:h-[70vh] rounded-lg bg-black"
        />
      </div>
      <div className="my-1">
        <h2 className="text-2xl uppercase font-medium">Title of video</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">
        <div className="flex gap-2 items-center my-1">
          <img
            className="h-8 w-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
            alt=""
          />
          <div className="flex flex-col ">
            <h2 className="text-[14px]">Channel Name</h2>
            <p className="text-[12px]">144k subscribers</p>
          </div>
          <button className="bg-black text-white px-2 py-1 rounded-full ml-6 hover:bg-zinc-500 transition-all ease-linear duration-300 flex items-center gap-1">
            {" "}
            <FaRegBell /> Subscribe{" "}
          </button>
        </div>
        <div className="flex gap-3 ">
          <button className="bg-zinc-900 text-white px-2 py-1 rounded-full flex items-center gap-1">
            <BiLike />
            100k
          </button>
          <button className="bg-zinc-900 text-white px-2 py-1 rounded-full flex items-center gap-1">
            {" "}
            <BiDislike /> 189k
          </button>
          <button className="bg-zinc-900 text-white px-2 py-1 rounded-full flex items-center gap-1">
            <PiShareFatLight /> Share
          </button>
          <button className="bg-zinc-900 text-white px-2 py-1 rounded-full sm:flex items-center gap-1 hidden">
            <LiaDownloadSolid /> Download
          </button>
        </div>
      </div>

      <div className="flex gap-2 my-1">
        <p className="text-sm">Views</p>
        <p className="text-sm">Upload Time</p>
      </div>
      <p className="text-zinc-700 my-3">Video Description</p>
      <div className="my-5">
        <p>Total comments</p>
      </div>
      <div className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Add a comment"
          className="border-b border-black px-1 outline-none "
        />
        <div className="flex gap-2 justify-end mt-2">
          <button className="flex items-center justify-center gap-2">
            <VscSend /> comment
          </button>
          <button className="flex items-center"> Cancel </button>
        </div>
      </div>
      <div className="my-2 flex items-center justify-between md:gap-4 gap-0">
        <div>
          <p className="text-[12px] ">Username</p>
          <p className="text-sm">Comment is video is too bad ;)</p>
        </div>
        <BsThreeDotsVertical className="cursor-pointer" />
      </div>
    </div>
  );
};

export default VideoPlayer;
