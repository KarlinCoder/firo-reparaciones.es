import { Chatbot } from "../../components/Chatbot";
import { AboutMe } from "./sections/AboutMe";
import { Experience } from "./sections/Experience";
import { Header } from "./sections/Header";
import { Services } from "./sections/Services";
import { WhyUs } from "./sections/WhyUs";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-pattern">
        <AboutMe />
        <Experience />
        <Services />
        <WhyUs />
      </div>
      <Chatbot />
    </>
  );
};
