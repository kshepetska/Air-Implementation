import { WhoWeAre } from '../Who We Are/WhoWeAre';
import { OurExpertise } from '../Our Expertise/OurExpertise';

export const AboutUs = () => {
  return (
    <div className="about">
      <section id="about" data-aos="fade-up">
        <WhoWeAre />
      </section>
      <section id="about" data-aos="fade-up">
        <OurExpertise />
      </section>
    </div>
  );
};
