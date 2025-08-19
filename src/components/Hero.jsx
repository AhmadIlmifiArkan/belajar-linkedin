import { useEffect, useState } from "react";
import heroBg from "../image/hero-bg.jpg";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setShowNavbar(y > window.innerHeight / 2);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imageOpacity = Math.max(1 - scrollY / 400, 0);
  const grayOpacity = Math.min(scrollY / 400, 1);
  const scale = 1 + scrollY / 1000;

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          showNavbar ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative">
          <h1
            className={`text-xl font-bold transition-colors duration-500 ${
              showNavbar ? "text-gray-900" : "text-white"
            }`}>
            Belajar Linkedin
          </h1>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 md:pt-44">
        <div
          className="absolute inset-0 -z-30 bg-gray-50 transition-opacity duration-300"
          style={{ opacity: grayOpacity }}
        />
        <div
          className="absolute inset-0 -z-20 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: "fixed",
            opacity: imageOpacity,
            transform: `scale(${scale})`,
            transition: "opacity 0.3s linear, transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent -z-10" />

        <div className="relative z-10 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Mastering <span className="text-blue-400">LinkedIn</span> for Career
            Growth
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl text-gray-100 drop-shadow">
            Optimalkan profil LinkedIn Anda dan tingkatkan peluang karir dengan
            strategi praktis, efektif, dan mudah diterapkan.
          </p>
          <a
            href="#daftar"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105">
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
