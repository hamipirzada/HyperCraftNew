import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import TechnologyStack from '../components/TechnologyStack';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <TechnologyStack />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;