const MarqueeSection = () => {
  return (
    <section className="bg-gray-100 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {/* 1st Item */}
        <div className="flex items-center gap-4">
          <img
            src="/slide1.avif"
            alt="slide1"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm md:text-base font-medium text-gray-700">
            Creative Branding Solutions
          </p>
        </div>

        {/* 2nd Item */}
        <div className="flex items-center gap-4">
          <img
            src="/slide2.avif"
            alt="slide2"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm md:text-base font-medium text-gray-700">
            24/7 Marketing Visibility
          </p>
        </div>

        {/* 3rd Item */}
        <div className="flex items-center gap-4">
          <img
            src="/slide3.avif"
            alt="slide3"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm md:text-base font-medium text-gray-700">
            Targeted Lead Generation
          </p>
        </div>

        {/* Add more as needed... */}
      </div>
    </section>
  );
};

export default MarqueeSection;
