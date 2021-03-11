import React, { useState } from 'react';
import '../../styles/hamburgerMenu/hamburgerMenu.scss';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenuOpen = () => {
    setOpen(!open);
  };
  const openClass = open ? 'open' : null;
  const classes = `hamburgerMenu__button hide-for-desktop ${openClass}`;
  return (
    <div className={classes} onClick={toggleMenuOpen}>
      <span className="buttonLine"></span>
      <span className="buttonLine"></span>
      <span className="buttonLine"></span>
    </div>
  );
};

export default HamburgerMenu;
