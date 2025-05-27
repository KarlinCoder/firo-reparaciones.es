import { AboutMe } from "./sections/AboutMe";
import { Experience } from "./sections/Experience";
import { Header } from "./sections/Header";
import { Services } from "./sections/Services";
import { WhyUs } from "./sections/WhyUs";

export const HomePage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Services />
      <WhyUs />
    </>
  );
};
