import avatar1 from "../assets/avatar1.avif";
import avatar2 from "../assets/avatar2.avif";
import avatar3 from "../assets/avatar3.avif";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

const marqueeItems = [
  { img: avatar1, text: "Best decision we ever made!" },
  { img: avatar2, text: "These folks get it..." },
  { img: avatar3, text: "They’re like digital magicians!" },
  { img: avatar4, text: "A total game-changer for us!" },
  { img: avatar5, text: "I can’t stop recommending them!" },
];

const MarqueeSection = () => {
  return (
    <section className="mt-24 py-6 overflow-hidden">
      <div className="relative w-full">
        {/* Left & right gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee whitespace-nowrap gap-12">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-2 rounded-full transition-opacity duration-500"
            >
              <img
                src={item.img}
                alt={`slide-${index}`}
                className="w-16 h-16 rounded-3xl object-cover"
              />
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
