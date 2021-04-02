import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/animatedParagraph/animatedParagraph.scss';
const AnimatedParagraph = ({ delay, children }) => {
  return (
    <motion.div
      transition={{ delay: delay, ease: 'easeOut', duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="animatedParagraph"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedParagraph;
