import './OurExpertise.scss';
import { expertiseData } from '../../data/ExpertiseData';

export const OurExpertise = () => {
  return (
    <div className="our-expertise" id="expertise">
      <div className="our-expertise__container">
        <h1 className="our-expertise__title">Our Expertise</h1>
        <div className="our-expertise__content">
          {expertiseData.map(({ title, text, imgSrc }, index) => (
            <div className="our-expertise__card" key={index}>
              <img
                src={imgSrc}
                alt={title}
                className="our-expertise__card-img"
              />
              <h3 className="our-expertise__card-title">{title}</h3>
              <p className="our-expertise__card-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
