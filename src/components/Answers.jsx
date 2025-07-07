import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaRegStar, FaTimes } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We're a one-stop-shop for all things digital! From crafting stunning websites to skyrocketing your SEO rankings, managing your social media, and building unforgettable brands, we do it all. Oh, and we promise we don't bite.",
  },
  {
    id: 2,
    question: "How long does it take to design a website?",
    answer:
      "Think of us as your digital chefs—we cook up greatness without rushing the recipe. Typically, it takes 4–6 weeks, depending on your needs. But don’t worry, we keep you in the loop every step of the way!",
  },
  {
    id: 3,
    question: "Do you work with small businesses or just big brands?",
    answer:
      "Size doesn’t matter! Whether you’re a budding startup or an industry giant, we’re here to make your vision a reality. Big dreams? Small budget? Let’s chat!",
  },
  {
    id: 4,
    question: "Can I customize the packages you offer?",
    answer:
      "Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success.",
  },
  {
    id: 5,
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "Numbers don’t lie, and neither do we! We track everything from website traffic to social media engagement and conversions. You'll get regular reports, so you’re always in the know.",
  },
  {
    id: 6,
    question: "What if I don't like the designs or strategies?",
    answer:
      "Honesty hour—we want you to love what we create. If you’re not thrilled, we’ll go back to the drawing board and tweak until it’s perfect. Your happiness is our success.",
  },
  {
    id: 7,
    question: "How do I get started?",
    answer:
      "It’s easy! Just click that shiny 'Contact Us' button, shoot us a message, or give us a call. We’ll grab coffee (virtually or in-person) and start brainstorming magic together.",
  },
  {
    id: 8,
    question: "Do you provide support after launching my website or campaign?",
    answer:
      "Of course! We don’t just wave goodbye after launch. We offer website maintenance, performance tracking, and ongoing support to ensure your success continues.",
  },
  {
    id: 9,
    question: "What makes your agency different from the rest?",
    answer:
      "We’re not just a team—we’re your partners in success. We combine creativity, strategy, and a sprinkle of fun to make your brand unforgettable. Plus, we love building relationships that last.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // padding-top: 16px (1rem), padding-bottom: 16px (1rem) = 32px
      const extraPadding = 32;
      const actualHeight = contentRef.current.scrollHeight + extraPadding;
      setContentHeight(`${actualHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isOpen]);
  
  return (
    <div
      className={`
        bg-[#eff1f6a4] rounded-3xl shadow-md transition-all duration-300 ease-in-out
        ${isOpen ? "relative z-10" : "z-0"}
      `}
    >
      <button
        className={`
          group cursor-pointer w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 focus:outline-none
          ${isOpen ? "bg-white rounded-2xl" : "rounded-xl "}
        `}
        onClick={onClick}
      >
        <span className="break-words text-lg">{question}</span>
        <span
          className={`
            p-2 rounded-xl transition-colors duration-300
            group-hover:bg-orange-400 text-gray-800
          `}
        >
          {isOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaPlus className="text-lg" />
          )}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className={`
    overflow-hidden transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "border-t border-dashed border-gray-400 px-6 md:px-8 py-4 mt-8"
        : "px-6 md:px-8"
    }
  `}
      >
        <p className="text-gray-600 text-base md:text-lg leading-relaxed break-words">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Answers = () => {
  const [openFAQId, setOpenFAQId] = useState([]);

  const handleFAQClick = (id) => {
    setOpenFAQId((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className=" max-w-7xl mx-auto mt-28 md:mt-52 px-4 2xl:px-0">
      <div className="  flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 w-fit lg:sticky lg:top-28   text-center lg:text-left lg:self-start">
          <div className="bg-[#eff1f6aa] mx-auto lg:mx-0 w-fit justify-center lg:justify-start  pr-2 rounded-2xl flex items-center gap-2 mb-4">
            <div className="bg-black p-[10px] rounded-full text-white">
              <FaRegStar className="text-sm" />
            </div>
            <h4 className="text-sm font-medium">Frequently Asked Questions</h4>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:mb-6">
            FAQ It Up! Your curiosity meets our expertise—
            <span className="hidden 2xl:flex">
              <br />
            </span>
            let’s clear things up!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We’ve gathered all the important info right here. Explore our FAQs
            and find the answers you need.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQId.includes(faq.id)}
              onClick={() => handleFAQClick(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Answers;
