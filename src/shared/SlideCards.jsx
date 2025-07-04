const SlideCards = ({ text, image }) => {
  return (
    <div className="h-full">
      <div className="bg-[#F5F7F9] shadow-lg h-full flex flex-col justify-between rounded-2xl overflow-hidden min-h-[440px]">
        {/* Text */}
        <div className="p-6">
          <p className="text-xl font-medium">{text}</p>
        </div>

        {/* Image */}
        <figure className="px-6 pb-6">
          <div className="w-full h-44 rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt="Benefit illustration"
              className="w-full h-full object-cover mix-blend-multiply pb-2"
            />
          </div>
        </figure>
      </div>
    </div>
  );
};
export default SlideCards;
