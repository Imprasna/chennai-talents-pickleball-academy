import { FC } from "react";
import Hero from "../features/home/Hero";
import About from "../features/home/About";
import Testimonials from "../features/home/Testimonials";
// import Features from "../features/home/Features";
import Footer from "../features/home/Footer";
import Navbar from "../components/Navbar";
import Coaches from "../features/home/Coaches";

const Home: FC = () => {
  return (
    <div className="font-sans p-6 space-y-8">
      <div className="container mx-auto space-y-10">
        <Navbar/>
        <Hero />
        <About />
        <Testimonials />
        <Coaches />
        {/* <Features /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
