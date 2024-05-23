import './Header.scss';
import Slider from '../Slider/Slider';
import { Navbar } from '../Navbar/Navbar';

interface HeaderProps {
  isDesktop: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDesktop }) => {
  return (
    <header className="header" id="top">
      <Navbar isDesktop={isDesktop} />
      <div className="header__row">
        <div className="header__content">
          <h1 className="header__content__main-text">Strategic Agency</h1>
          <h2 className="header__content__text">
            We believe in the power of bold ideas that can solve business
            challenges.
          </h2>
          <a href="#about" className="header__content__button">
            Learn More
          </a>
        </div>
      </div>
      <Slider />
    </header>
  );
};
