import img1 from "../assets/portfolio3.1.avif";
import img2 from "../assets/portfolio3.2.avif";
import img3 from "../assets/portfolio3.3.avif";
import HiddenSlide from "../shared/HiddenSlide";

const PortfolioHideLastBox = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="h-96">
        <HiddenSlide images={[img1, img2, img3]} />
      </div>

      {/* Content Section */}
      <div className="py-8 px-1 space-y-8 mt-24 ">
        {/* The Challenge */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>
          <p className="text-black leading-relaxed">
            Agency, a boutique marketing firm, approached us with a website that
            wasn’t doing justice to their creative reputation. Their site was
            outdated, lacked user-friendly navigation, and didn’t reflect their
            vibrant brand personality. They needed a modern, responsive, and
            compelling digital experience to attract high-value clients and
            showcase their impressive portfolio.
          </p>
        </section>

        {/* The Impact */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Our Solution</h2>
          <p className="text-black">
            We took a deep dive into their brand, values, and target audience to
            create a website that truly reflected their ethos. Here’s what we
            did:
          </p>
          <ul className="list-decimal list-outside   pl-5 text-black leading-relaxed mt-2 space-y-1">
            <li>
              <strong>Brand Revamp:</strong> Enhanced their visual identity with
              fresh typography, bold colors, and cohesive imagery.
            </li>
            <li>
              <strong>User-Centered Design:</strong> Developed an intuitive
              layout with easy navigation, clear CTAs, and a seamless user
              experience.
            </li>
            <li>
              <strong>Showcase Portfolio:</strong> Built a dynamic portfolio
              section with engaging case studies and interactive visuals.
            </li>
            <li>
              <strong>SEO Strategy:</strong> Optimized their site structure,
              metadata, and content to improve search visibility.
            </li>
            <li>
              <strong>Responsive Design:</strong> Delivered a mobile-first
              website to ensure exceptional performance across all devices.
            </li>
          </ul>
        </section>

        {/* The Results */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">The Results</h2>
          <ul className="list-disc pl-5 text-black leading-relaxed -mt-4">
            <li>
              <strong>40% increase in client inquiries</strong> within the first
              3 months.
            </li>
            <li>
              <strong>60% boost in site engagement</strong> through interactive
              elements and improved navigation.
            </li>
            <li>
              Achieved <strong> Top 5 rankings on Google</strong> for targeted
              keywords, driving consistent organic traffic.
            </li>
            <li>
              Positive feedback from clients, with comments on the site’s
              modern, professional, and creative vibe.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Testimonial</h2>
          <div className="  rounded-lg ">
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "Our new website is everything we hoped for and more! The team
              perfectly captured our brand and helped us connect with clients in
              a way we never thought possible. We’ve seen a massive uptick in
              inquiries and couldn’t be happier!"
            </p>
            <p className="text-black font-medium -mt-4">
              — Sarah Jenkins, Co-Founder, XYZ Agency
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Takeaway</h2>
          <div className="  rounded-lg ">
            <p className="text-black italic leading-relaxed mb-4">
              Your website is more than a digital storefront—it’s a reflection
              of your brand’s personality and capabilities. With a little
              creativity and the right expertise, we helped XYZ Agency turn
              their website into their best marketing tool. Imagine what we can
              do for you!
            </p>
            <p className="text-black font-medium">
              Ready to elevate your digital presence? Let’s chat!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioHideLastBox;
