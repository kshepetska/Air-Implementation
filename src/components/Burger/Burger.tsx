import React from 'react';
import './Burger.scss';
import { NavLinks } from '../../data/NavLinks';

interface BurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <button className="burger-menu__close" onClick={onClose}>
        ✖
      </button>
      <nav className="burger-menu__nav">
        {NavLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            className="burger-menu__link"
            onClick={onClose}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
