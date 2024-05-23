import { SendMess } from '../SendMess/SendMess';
import { ContactUs } from '../Contact Us/ContactUs';
import Air from '../Navbar/Navbar img/Air.svg';
import './Footer.scss';
import { NavLinks } from '../../data/NavLinks';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <SendMess />
        <ContactUs />
        <div className="footer__navbar">
          <a href="#top" className="footer__air-link">
            <img src={Air} alt="Air" className="footer__air" />
          </a>
          <div className="footer__links">
            {NavLinks.map(({ id, text, href }) => (
              <a key={id} href={href} className="footer__link">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
