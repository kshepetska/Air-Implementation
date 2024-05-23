import { socialMediaLinks } from '../../data/SocialMediaLinks';
import './ContactUs.scss';

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us__container">
        <h1 className="contact-us__title">Contact Us</h1>
        <div className="contact-us__content">
          <div className="contact-us__section">
            <h3 className="contact-us__section-title">CALL US</h3>
            <a href="tel:+654 321 987" className="contact-us__section-link">
              <p className="contact-us__section-text">654 3211 987</p>
            </a>
          </div>
          <div className="contact-us__section">
            <h3 className="contact-us__section-title">VISIT US</h3>
            <a
              // eslint-disable-next-line max-len
              href="https://www.google.com.ua/maps/@48.9401535,38.4985813,18z?hl=en"
              className="contact-us__section-link"
            >
              <p className="contact-us__section-text">
                2905 West Drive, Buffalo Grove
              </p>
            </a>
          </div>
          <div className="contact-us__section">
            <h3 className="contact-us__section-title">OUR SOCIALS</h3>
            {socialMediaLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.src}
                  alt={link.alt}
                  className="contact-us__section-img"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
