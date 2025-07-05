import { FaRegStar } from "react-icons/fa"


const TitleSection = ({badgeText,title}) => {
  return (
      <div>
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="bg-gray-200 flex items-center w-fit mx-auto pr-4 gap-2 rounded-full ">
                    <div className="bg-black p-[10px] rounded-full text-white">
                      <FaRegStar className="text-sm" />
                    </div>
                    <h4 className="text-sm font-medium">{badgeText}</h4>
                  </div>
                  <h2 className="text-3xl md:text-5xl mt-1 font-bold leading-tight w-1/2 mx-auto">
                    {title}
                  </h2>
                </div>
    </div>
  )
}

export default TitleSection