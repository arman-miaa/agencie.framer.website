const SlideCards = ({ text, image }) => {
  return (
    <div className="h-full">
      <div className="card bg-base-100 shadow-lg h-full flex flex-col">
        <div className="card-body flex-1 p-6">
          <p className="text-base leading-relaxed text-gray-700">{text}</p>
        </div>
        <figure className="px-6 pb-6">
          <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt="Benefit illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default SlideCards;
