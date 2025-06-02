import { AboutMe } from "./sections/AboutMe";
import { Experience } from "./sections/Experience";
import { FAQSection } from "./sections/FAQ";
import { Header } from "./sections/Header";
import { Services } from "./sections/Services";
import { WhyUs } from "./sections/WhyUs";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-pattern">
        <AboutMe />
        <Services />
        <Experience />
        <FAQSection />
        <WhyUs />
      </div>
    </>
  );
};
