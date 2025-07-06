import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Button1 from "./Button1";

const PricingCard = ({
  planName,
  price,
  notice,
  period,
  toggle,
  description,
  features,
}) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const monthlyPrice = "$29";
  const yearlyPrice = "$290";

  return (
    <div className="bg-[#eff1f6a4] rounded-2xl p-2 shadow-sm  relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - Pricing Info */}
        <div className="bg-white h-fit p-4 rounded-2xl lg:sticky top-20">
          <div className="bg-[#eff1f6a4] w-fit rounded-full pr-3 flex items-center gap-1 mb-6">
            <div className="bg-black p-[10px] rounded-full text-white">
              <FaRegStar className="text-sm" />
            </div>
            <h3 className="font-medium text-gray-900">{planName}</h3>
          </div>

          <div className="mb-6 relative">
            {/* Price Switch with Animation */}
            {toggle ? (
              <div className="h-[48px] overflow-hidden mb-2">
                <div
                  className={`transition-transform duration-500 ease-in-out flex flex-col`}
                  style={{
                    transform: `translateY(${isMonthly ? "6%" : "-50%"})`,
                  }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {monthlyPrice}
                    </span>
                    <span className="text-base text-gray-700">/month</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {yearlyPrice}
                    </span>
                    <span className="text-base text-gray-700">/year</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {price}
                </span>
                <span className="text-base text-gray-700">/{period}</span>
              </div>
            )}

            {/* Toggle Button */}
            {toggle && (
              <div className="absolute -top-3 right-4 z-10">
                <div className="w-40 border border-gray-200 rounded-full flex items-center justify-between p-1 relative shadow-inner">
                  {/* Sliding Indicator */}
                  <div
                    className={`absolute top-1 left-1 w-1/2 h-8 rounded-full bg-black transition-transform duration-300 ease-in-out ${
                      isMonthly ? "translate-x-0" : "translate-x-full"
                    }`}
                  ></div>

                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`w-1/2 z-10 text-sm font-medium py-1 transition-colors duration-300 ${
                      isMonthly ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`w-1/2 z-10 text-sm font-medium py-1 transition-colors duration-300 ${
                      !isMonthly ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            )}

            {/* Notice */}
            {notice && <span className="text-gray-600 text-sm">{notice}</span>}

            <hr className="mt-4 border-t-2 border-dashed border-gray-400" />
            <p className="text-black font-medium mt-4 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side - Features List */}
        <div className="space-y-3 bg-white rounded-2xl p-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <IoMdCheckmark className="mt-1 flex-shrink-0 " />
              <span className="text-black text-sm leading-relaxed">
                {feature}
              </span>
            </div>
          ))}

          <Button1
            text="Get Started"
            link="https://realmehedi.lemonsqueezy.com/buy/3a99bf3d-8b2a-44a1-bab5-3c584b2948da"
            className="flex text-center items-center justify-center cursor-pointer mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
