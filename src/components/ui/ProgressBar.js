import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import '../../styles/progressBar/progressBar.scss';
import { motion } from 'framer-motion';
const ProgressBar = ({ file, setFile, type }) => {
  const { url, progress } = useStorage(file, type);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
      className="progressBar"
    ></motion.div>
  );
};

export default ProgressBar;
