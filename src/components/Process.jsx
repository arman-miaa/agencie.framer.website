import FadeUpOnScroll from "../shared/FadeUpOnScroll";
import TitleSection from "../shared/TitleSection";
import ProcessSlide from "./ProcessSlide";

const Process = () => {
  return (
    <div
      id="process"
      className="scroll-mt-36 mt-20 md:mt-[180px] max-w-7xl mx-auto px-4"
    >
      <TitleSection
        badgeText="Our Work Process"
        title="From idea to impact—our process makes it easy, exciting, and effective!"
      />

      <div>
        <FadeUpOnScroll delay={0.2}>
          <ProcessSlide />
        </FadeUpOnScroll>
      </div>
    </div>
  );
};

export default Process;
