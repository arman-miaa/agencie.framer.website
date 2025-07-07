// components/FadeUpOnScroll.jsx
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 200 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, 
      ease: "easeOut",
    },
  },
};

const FadeUpOnScroll = ({
  children,
  className = "",
  delay = 0,
  amount = 0.3, 
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpOnScroll;
