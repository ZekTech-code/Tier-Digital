import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Work from "../components/Work";
import Case from "../components/Case";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollReveal animation="fade-up">
        <Stats />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <Trust />
      </ScrollReveal>
      <ScrollReveal animation="fade-left">
        <About />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <Services />
      </ScrollReveal>
      <ScrollReveal animation="fade-right">
        <Work />
      </ScrollReveal>
      <ScrollReveal animation="fade-left">
        <Case />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal animation="fade-scale">
        <FAQ />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <CTA />
      </ScrollReveal>
    </>
  );
};

export default Home;
