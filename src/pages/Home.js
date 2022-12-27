import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Video from "../components/Video/Video";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Video />
      <Footer />
    </>
  );
};

export default Home;
