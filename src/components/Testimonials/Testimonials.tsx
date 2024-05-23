import './Testimonials.scss';
import { testimonialsData } from '../../data/TestimonialsData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="page__testimonials testimonials">
      <div className="testimonials__container">
        <div className="testimonials__label">Testimonials</div>
        <h3 className="testimonials__title">What people say</h3>
        <div className="testimonials__items">
          {testimonialsData.map(testimonial => (
            <article
              key={testimonial.id}
              className="testimonials__item testimonial"
            >
              <div className="testimonial__image">
                <img
                  src={testimonial.image}
                  alt={`testimonial-ava-${testimonial.id}`}
                />
              </div>
              <p className="testimonial__feedback">{testimonial.feedback}</p>
              <p className="testimonial__name">{testimonial.name}</p>
              <div className="testimonial__label">{testimonial.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
