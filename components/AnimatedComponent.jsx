"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";


const variants = {
  hidden: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
}


const AnimatedComponent = ({ children }) => {
  if( window !== undefined){
    window.scrollTo({top:0, behavior: 'smooth'});
  }
  return (
    <AnimatePresence  
    mode="wait"
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{delay:1.5, duration: 1.2, type: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedComponent;
