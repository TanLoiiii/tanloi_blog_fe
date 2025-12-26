import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Subject from "../components/Subject";
import About from "../components/About";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <Subject />
      <About />
      <Skills />
      <Certification />
      <Footer />
    </div>
  );
};

export default LandingPage;
