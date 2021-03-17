import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/modal/modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const MenuModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal flex flex-c"
    >
      <div className="modal__content flex flex-ai-c flex-fd-c">
        <div>Contact</div>
        <div>Shop</div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </motion.div>,
    document.getElementById('portal')
  );
};

export default MenuModal;
