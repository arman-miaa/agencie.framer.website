import { useEffect, useState } from "react";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // total animation time
    const increment = end / (duration / 20); // every 20ms

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
    <span className="text-4xl font-bold text-black">
      {count}
      {suffix}
    </span>
  );
};

const OurMission = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-12">
        <span className="text-orange-600">Building</span> brands,{" "}
        <span className="text-orange-600">boosting</span> businesses,
        <br />
        and <span className="text-orange-600">redefining</span> possibilities.
        Let’s <br />
        grow your brand together.
      </h2>

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="rounded-2xl border border-dashed p-6">
          <Counter target={250} suffix="+" />
          <h4 className="text-lg font-medium mt-2">Projects Delivered</h4>
          <p className="text-sm text-gray-500 mt-1">
            We’ve successfully completed over 250 projects—and we’re just
            getting started!
          </p>
        </div>

        {/* Box 2 */}
        <div className="rounded-2xl border border-dashed p-6">
          <Counter target={70} suffix="%" />
          <h4 className="text-lg font-medium mt-2">Business Growth</h4>
          <p className="text-sm text-gray-500 mt-1">
            Our strategies have helped clients achieve up to 70% revenue growth
            in just one year!
          </p>
        </div>

        {/* Box 3 */}
        <div className="rounded-2xl border border-dashed p-6">
          <Counter target={500} suffix="+" />
          <h4 className="text-lg font-medium mt-2">Happy Clients</h4>
          <p className="text-sm text-gray-500 mt-1">
            More than 500 satisfied clients trust us to bring their ideas to
            life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
