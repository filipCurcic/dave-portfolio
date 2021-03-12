import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/modal/modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const MenuModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal flex flex-c">
      <div className="modal__content flex flex-ai-c flex-fd-c">
        <div>Contact</div>
        <div>About</div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default MenuModal;
