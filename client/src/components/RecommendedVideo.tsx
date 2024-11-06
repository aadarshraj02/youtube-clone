const RecommendedVideo = (): JSX.Element => {
  return (
    <div className="py-4 md:flex gap-2 hidden">
      <div>
        <img
          className="w-40 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
          alt=""
        />
      </div>
      <div>
        <h2 className=" capitalize">Title of video</h2>
        <p className="text-[12px]">Channel Name</p>
        <div className="flex gap-2">
          <p className="text-[10px]">Views</p>
          <p className="text-[10px]">Upload date</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
