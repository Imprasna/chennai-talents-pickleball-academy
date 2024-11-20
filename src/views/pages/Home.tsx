import { FC } from "react";
import Hero from "../features/home/Hero";
import About from "../features/home/About";
import Features from "../features/home/Features";
import Footer from "../features/home/Footer";

const Home: FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
