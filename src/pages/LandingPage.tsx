import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Subject from "../components/Subject";
import About from "../components/About";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Header />
      <HeroSection />
      <Subject />
      <About />
      <Skills />
      <Certification />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
