import { useState } from "react";
import PortfolioHideBoxFirst from "../components/PortfolioHideBoxFirst";
import PortfolioHideLastBox from "../components/PortfolioHideLastBox";


const PortfolioCard = ({
  image,
  tags,
  title,
  summary,
  details,
  type,
  link,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg space-y-4 transition-all duration-500">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] object-cover rounded-xl"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-xs px-3 py-1 rounded-full text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title + Summary */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h2>
      <p className="text-gray-700">{summary}</p>

      {/* Buttons & Expansion */}
      {type === "expand" && (
        <PortfolioHideBoxFirst
          details={details}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      )}

      {type === "link" && (
        <button
          onClick={() => window.open(link, "_blank")}
          className="w-full py-2 rounded-full bg-black text-white font-semibold"
        >
          View Case Study
        </button>
      )}

      {type === "both" && (
        <PortfolioHideLastBox
          details={details}
          link={link}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      )}
    </div>
  );
};

export default PortfolioCard;
