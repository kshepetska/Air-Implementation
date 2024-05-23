import React, { useState } from 'react';
import Air from './Navbar img/Air.svg';
import Vector from './Navbar img/Vector.svg';
import './Navbar.scss';
import { Burger } from '../Burger/Burger';
import { NavLinks } from '../../data/NavLinks';

interface HeaderProps {
  isDesktop: boolean;
}

export const Navbar: React.FC<HeaderProps> = ({ isDesktop }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  return (
    <div className="navbar">
      <a href="#top" className="navbar__air-link">
        <img src={Air} alt="Air" className="navbar__air" />
      </a>
      {isDesktop ? (
        <div className="navbar__links">
          {NavLinks.map(({ id, text, href }) => (
            <a key={id} href={href} className="navbar__link">
              {text}
            </a>
          ))}
        </div>
      ) : (
        <>
          <img
            src={Vector}
            alt="Vector"
            className="navbar__vector"
            onClick={toggleBurgerMenu}
          />
          <Burger isOpen={isBurgerOpen} onClose={closeBurgerMenu} />
        </>
      )}
      <a href="#contact" className="navbar__title">
        HIRE US
      </a>
    </div>
  );
};
