import { useEffect } from "react";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Topics from "./Topics";
import HowItWorks from "./HowItWorks";
import DoMore from "./DoMore";
import Follow from "./Follow";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <Carousel />
      <Topics />
      <HowItWorks />
      <DoMore />
      <Follow />
    </>
  );
};

export default About;
