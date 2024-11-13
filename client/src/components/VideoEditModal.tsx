// src/components/VideoEditModal.tsx
import { useState } from "react";
import { useVideo } from "../hooks/useVideo";

interface VideoEditModalProps {
  videoId: string;
  currentTitle: string;
  currentDescription: string;
  currentThumbnailUrl: string;
  onClose: () => void;
}

const VideoEditModal = ({
  videoId,
  currentTitle,
  currentDescription,
  currentThumbnailUrl,
  onClose,
}: VideoEditModalProps) => {
  const { editVideo, isEditing, error } = useVideo();
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);
  const [thumbnailUrl, setThumbnailUrl] = useState(currentThumbnailUrl);

  const handleUpdate = async () => {
    await editVideo(videoId, { title, description, thumbnailUrl });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4">Edit Video</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-b p-2 w-full mb-4"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-b p-2 w-full mb-4"
          placeholder="Description"
        />
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          className="border-b p-2 w-full mb-4"
          placeholder="Thumbnail URL"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-end gap-3">
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            disabled={isEditing}
          >
            {isEditing ? "Updating..." : "Update"}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoEditModal;
