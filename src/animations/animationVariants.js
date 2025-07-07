export const fadeUpLine = {
  hidden: { opacity: 0, y: 30 }, // নিচ থেকে একটু নিচে শুরু করবে
  visible: (i = 0) => ({
    opacity: 1,
    y: 0, // আসল জায়গায় উপরে উঠবে
    transition: {
      delay: i * 0.2, // index অনুযায়ী ধাপে ধাপে আসবে
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// animation.js
// animation.js
export const slideUpFadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  
  

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};



export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4, // ধীরে fade-in হবে
      ease: "easeOut",
    },
  },
};
  
