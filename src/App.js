import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />

      <Footer />
    </div>
  );
}
