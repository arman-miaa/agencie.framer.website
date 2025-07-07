import { motion } from "framer-motion";
import { Children, cloneElement } from "react";

const wordFadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const HeadingMotionLine = ({ children, className = "", index = 0 }) => {
  // Convert all children into flat array of words or elements
  const extractWords = (children) => {
    const words = [];

    Children.forEach(children, (child) => {
      if (typeof child === "string") {
        child
          .trim()
          .split(" ")
          .forEach((word) => words.push(word));
      } else if (typeof child === "object" && child?.props?.children) {
        const nestedWords = extractWords(child.props.children);
        nestedWords.forEach((word) => {
          words.push(cloneElement(child, {}, word));
        });
      }
    });

    return words;
  };

  const words = extractWords(children);

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          custom={index * 10 + wordIndex}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default HeadingMotionLine;
