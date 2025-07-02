const VideoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video bg-black">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <button
          className="absolute top-2 right-2 text-white bg-red-600 px-4 py-1 rounded"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
