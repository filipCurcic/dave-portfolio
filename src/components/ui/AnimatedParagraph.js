import React from 'react';
import { motion } from 'framer-motion';
const AnimatedParagraph = ({ delay, children }) => {
  return (
    <motion.div
      transition={{ delay: delay, ease: 'easeOut', duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ fontSize: '1.65em' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedParagraph;
