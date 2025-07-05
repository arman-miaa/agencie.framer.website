import img1 from "../assets/portfolio2.avif"
import img2 from "../assets/portfolio3.avif"
import img3 from "../assets/portfolio4.avif"
import HiddenSlide from "../shared/HiddenSlide";


const PortfolioHideBoxFirst = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="h-96">
        <HiddenSlide images={[img1, img2, img3]} />
      </div>

      <div className="aspect-video w-full max-w-[640px] mx-auto rounded-2xl overflow-hidden shadow-lg mt-28">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/tmgwq7AtjMw?si=OeepFr23NEV5YY-t"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="py-8 px-1 space-y-8 ">
        {/* The Challenge */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>
          <p className="text-black leading-relaxed">
            Frostify had the magic of handcrafted, mouthwatering ice creams but
            lacked a strong visual identity to stand out in the crowded freezer
            aisle. They wanted to capture the hearts (and taste buds) of their
            audience while boosting their in-store and online sales.
          </p>
        </section>

        {/* What We Did */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">What We Did</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                1. Brand Identity Design:
              </h3>
              <p className="text-gray-700">
                We created a fresh and playful identity for Frostify that
                screams “premium yet fun.” From a vibrant color palette inspired
                by their delicious flavors to a quirky ice-cream-cone mascot,
                the brand feels instantly lovable and unforgettable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                2. Packaging Design:
              </h3>
              <p className="text-black">
                Designed packaging that pops on the shelves. Frostify’s new tubs
                became Instagrammable stars, with pastel tones, cheeky taglines
                like “Scoop Dreams,” and a design that tells a story with every
                bite.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                3. Social Media Strategy:
              </h3>
              <p className="text-black">
                Launched a campaign titled “Chill Responsibly”, focusing on
                Frostify’s creamy indulgence. This included playful Reels,
                flavor reveals, and interactive polls, which skyrocketed
                engagement by 75% in just three months.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                4. Storefront & Digital Presence:
              </h3>
              <p className="text-black">
                Revamped Frostify’s website and introduced a seamless online
                ordering system. Added a “Flavor Finder” quiz to recommend the
                perfect flavor based on mood (because, why not?).
              </p>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">The Impact</h2>
          <ul className="list-disc pl-5 text-black leading-relaxed -mt-4">
            <li>
              <strong>300% Increase in Sales:</strong> Within 6 months,
              Frostify’s in-store sales tripled thanks to eye-catching branding
              and better shelf placement.
            </li>
            <li>
              <strong>50% Growth in Online Sales:</strong> The new digital
              strategy drove more ice cream cravings straight to their website.
            </li>
            <li>
              <strong> 10K New Followers:</strong> Frostify’s Instagram gained a
              loyal audience drooling over every new post.
            </li>
            <li>
              <strong>Loyalty Boost:</strong> Introduced a "Scoop Squad"
              membership program, converting 40% of first-time buyers into
              repeat customers.
            </li>
          </ul>
        </section>

        {/* Client Love */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Client Love</h2>
          <div className="  rounded-lg ">
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "We had the ice cream, but now we’ve got the vibe! The Frostify
              brand feels like a party in a cone, and customers are loving it.
              This team brought our vision to life (and then some). Cheers to
              more scoops and smiles!”
            </p>
            <p className="text-black font-medium -mt-4">
              – Liam Carver, Founder of Frostify
            </p>
          </div>
        </section>

        {/* The Results */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">The Results</h2>
          <ul className="list-disc pl-5 text-black leading-relaxed -mt-4">
            <li>
              <strong>+300% sales growth</strong> in 6 months
            </li>
            <li>
              <strong>75% boost in engagement</strong> on social media
            </li>
            <li>
              <strong> 40% customer retention</strong> with the Scoop Squad
              program
            </li>
       
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PortfolioHideBoxFirst;
