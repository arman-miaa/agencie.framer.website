const VideoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 top-[66px] bg-black/80 z-50 flex items-center justify-center">
      <div className="w-1/2 bg-black rounded-xl overflow-hidden shadow-lg flex flex-col items-center">
        {/* YouTube Video */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tmgwq7AtjMw?si=2WuGVyuRAzZs27Ms"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Close Section */}
        <div
          onClick={onClose}
          className="flex  items-center border border-gray-200 cursor-pointer  p-1 px-3 rounded-full gap-2"
        >
          <span className="text-white font-semibold ">Close</span>
          <button className="text-orange-500 text-lg hover:text-orange-600 transition">
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
