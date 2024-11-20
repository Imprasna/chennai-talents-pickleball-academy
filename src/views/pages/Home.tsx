import { FC } from "react";
import Hero from "../features/home/Hero";
import About from "../features/home/About";
import Features from "../features/home/Features";
import Footer from "../features/home/Footer";
import Navbar from "../components/Navbar";

const Home: FC = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
