
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";
import logo10 from "../assets/logo10.svg";

const Partners = () => {
  const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 6, src: logo6, alt: "Logo 6" },
    { id: 7, src: logo7, alt: "Logo 7" },
    { id: 8, src: logo8, alt: "Logo 8" },
    { id: 9, src: logo9, alt: "Logo 9" },
    { id: 10, src: logo10, alt: "Logo 10" },
  ];

  return (
    <section className="py-16 bg-white">
      {" "}
      {/* Increased vertical padding */}
      <div className="container mx-auto px-4 md:px-20 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-12">
          {" "}
          {/* Increased margin-bottom */}
          We don't just work <br className="md:hidden" /> together—we{" "}
          <span className="text-orange-500">grow</span> together.
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {" "}
          {/* Adjusted gap and max-width */}
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg h-24 w-full" // Adjusted height and full width
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[70%] max-h-[70%] object-contain"
              />{" "}
              {/* Adjusted image size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
