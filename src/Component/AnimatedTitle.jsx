// src/components/AnimatedTitle.jsx

import React from 'react';
import { motion } from 'framer-motion';


const slideUp = {
  hidden: {
    opacity: 0,
    y: 20, 
  },
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};


const slideLeft = {
  hidden: {
    opacity: 0,
    x: -50, 
  },
  visible: {
    opacity: 1,
    x: 0, 
    transition: {
      duration: 2,
      ease: "easeOut",
    
      stiffness: 100,
    },
  },
};

const AnimatedTitle = ({ text, className, animationType = 'slideUp' }) => {
  
  
  const variants = animationType === 'slideLeft' ? slideLeft : slideUp;

  return (
    <motion.h1
      className={className}
      variants={variants} 
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;