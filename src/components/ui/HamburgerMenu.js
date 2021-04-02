import React, { useState } from 'react';
import '../../styles/hamburgerMenu/hamburgerMenu.scss';
import MenuModal from './MenuModal';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleMenuOpen = () => {
    setOpen(!open);
    setIsModalOpen(!isModalOpen);
  };
  const openClass = open ? 'open' : null;
  const classes = `hamburgerMenu__button hide-for-desktop ${openClass}`;
  return (
    <>
      <div className={classes} onClick={toggleMenuOpen}>
        <span className="buttonLine"></span>
        <span className="buttonLine"></span>
        <span className="buttonLine"></span>
      </div>
      <MenuModal click={toggleMenuOpen} open={isModalOpen}>
        {' '}
        asdasdasd{' '}
      </MenuModal>
    </>
  );
};

export default HamburgerMenu;
