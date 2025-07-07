import { useEffect, useState } from "react";
import HeadingMotionLine from "../shared/HeadingMotionLine";

// Counter Component
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-7xl font-medium text-black">
      {count}
      <span className="text-main lg:text-6xl">{suffix}</span>
    </span>
  );
};

// OurMission Section
const OurMission = () => {
  return (
    <section className="max-w-7xl px-8 mx-auto mt-12 lg:mt-[150px]  py-16 text-center">
      {/* Title */}
      <h2 className="text-4xl lg:text-[62px] font-semibold lg:leading-14 mb-12 text-center space-y-2">
        <div>
          <HeadingMotionLine index={0}>
            <span className="text-orange-600">Building</span> brands,{" "}
            <span className="text-orange-600">boosting</span> businesses,
          </HeadingMotionLine>
        </div>
        <div>
          <HeadingMotionLine index={1}>
            and <span className="text-orange-600">redefining</span>{" "}
            possibilities. Let’s
          </HeadingMotionLine>
        </div>
        <div>
          <HeadingMotionLine index={2}>
            grow your brand together.
          </HeadingMotionLine>
        
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Box 1 */}
        <div className="flex flex-col text-left">
          <div className="rounded-3xl border border-dashed border-gray-400 p-5 flex flex-col items-center md:items-start text-left">
            <Counter target={250} suffix="+" />
            <h4 className="text-xl font-medium mt-2">Projects Delivered</h4>
          </div>
          <p className="mt-3 text-[15px] font-medium text-gray-600 md:max-w-xs w-ful text-center md:text-left">
            We’ve successfully completed over 250 projects—and we’re just
            getting started!
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col text-left">
          <div className="rounded-3xl border border-dashed border-gray-400 p-5 flex flex-col  items-center md:items-start text-left">
            <Counter target={70} suffix="%" />
            <h4 className="text-lg font-medium mt-2">Business Growth</h4>
          </div>
          <p className="mt-3 text-[15px] font-medium text-gray-600 md:max-w-xs w-ful text-center md:text-left">
            Our strategies have helped clients achieve up to 70% revenue growth
            in just one year!
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col text-left">
          <div className="rounded-3xl border border-dashed border-gray-400 p-5 flex flex-col items-center md:items-start text-left">
            <Counter target={500} suffix="+" />
            <h4 className="text-lg font-medium mt-2">Happy Clients</h4>
          </div>
          <p className="mt-3 text-[15px] font-medium text-gray-600 md:max-w-xs w-ful text-center md:text-left">
            More than 500 satisfied clients trust us to bring their ideas to
            life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
