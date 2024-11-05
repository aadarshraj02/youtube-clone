const VideoCard = (): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow duration-200">
      <img src="" alt="" className="rounded-lg h-40 w-full object-cover" />
      <h3 className="mt-2 font-semibold text-lg">Title</h3>
      <p className="text-gray-600">Channel name</p>
      <p className="text-gray-500 text-sm">views and upload date</p>
    </div>
  );
};

export default VideoCard;
