const SlideCards = ({ text, image }) => {
  return (
    <div className="h-full">
      <div className="bg-[#F5F7F9]  shadow-lg h-full flex flex-col justify-between rounded-4xl overflow-hidden min-h-[470px] mt-10 md:mt-2 ">
        {/* Text */}
        <div className="p-10">
          <p className="text-xl md:text-2xl font-medium">{text}</p>
        </div>

        {/* Image */}
        <figure className="px-6 pb-2 mt-auto">
          <div className="   flex justify-center w-full md:w-full  md:h-44 rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt="Benefit illustration"
              className="w-70 pt-20 md:pt-0 h-full object-cover mix-blend-multiply pb-4"
            />
          </div>
        </figure>
      </div>
    </div>
  );
};
export default SlideCards;
