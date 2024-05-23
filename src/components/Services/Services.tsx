import React from 'react';
import './Services.scss';
import Arrow from './Services img/Arrow.svg';
import { servicesData } from '../../data/ServicesData';

export const Services: React.FC = () => {
  return (
    <div className="services" id="services">
      <div className="services__container">
        <div className="services__label">services</div>
        <h3 className="services__title">
          Air is a full service creative agency
        </h3>
        <div className="services__text">
          <p className="text">
            Deep analytics, strong strategy and bright creative ideas.
          </p>
          <p className="text">
            We are sure that first-rate job is possible only if all three
            components are united.
          </p>
        </div>
        <div className="services__items">
          {servicesData.map(({ number, points, link }, index) => (
            <article className="services__item" key={index}>
              <div className="services__item container">
                <div className="service__number-container">
                  <p className="service__number">{number}</p>
                </div>
                <ul className="service__list">
                  {points.map((point, idx) => (
                    <li className="service__point" key={idx}>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="service__link-container">
                  <a href={link} className="service__circle">
                    <img src={Arrow} alt="Arrow" className="service__arrow" />
                  </a>
                  <a href={link} className="service__link">
                    Learn more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
