export const fadeUpLine = {
  hidden: { opacity: 0, y: 30 }, 
  visible: (i = 0) => ({
    opacity: 1,
    y: 0, 
    transition: {
      delay: i * 0.2, 
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


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
      duration: 1.4, 
      ease: "easeOut",
    },
  },
};
  
