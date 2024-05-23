import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '../components/Header/Header';
import { AboutUs } from '../components/About Us/AboutUs';
import { Services } from '../components/Services/Services';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Vision } from '../components/Vision/Vision';
import { Footer } from '../components/Footer/Footer';

const App: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} />

      <section id="about" data-aos="fade-up">
        <AboutUs />
      </section>
      <section id="services" data-aos="fade-up">
        <Services />
      </section>
      <section id="testimonials" data-aos="fade-up">
        <Testimonials />
      </section>
      <section id="vision" data-aos="fade-up">
        <Vision />
      </section>
      <section id="contacts" data-aos="fade-up">
        <Footer />
      </section>
    </>
  );
};

export default App;
