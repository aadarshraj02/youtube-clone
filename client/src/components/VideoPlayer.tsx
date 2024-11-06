const VideoPlayer = (): JSX.Element => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>Title of video</h2>
      </div>
      <div>
        <h2>Channel Name</h2>
        <button>Subscribe</button>
      </div>
      <div>
        <button>Like</button>
        <button>dislike</button>
        <button>Share</button>
        <button>Download</button>
      </div>
      <div>
        <p>Views</p>
        <p>Upload Time</p>
      </div>
      <div>
        <p>Video Description</p>
      </div>
      <div>
        <p>Total comments</p>
      </div>
      <div>
        <input type="text" placeholder="Add a comment" />
      </div>
      <div>
        <p>All comments by map</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
