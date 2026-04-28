import React, { useState, useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";

const Home_banner1 = () => {
  const slides = [
    {
      url: "/images/banner1.jpg",
      title: "Unleash The",
      title2: "Athlete Within",
    },
    {
      url: "/images/banner2.jpg",
      title: "Elevate Your",
      title2: "Fitness Goals",
    },
    {
      url: "/images/banner3.jpg",
      title: "Transform Pain",
      title2: "Into Power",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">
      {/* 2. The Slider Track: Moves based on index. 
          Force it to be 100% width of the parent. */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full min-w-full h-full relative flex-shrink-0"
          >
            <img
              src={slide.url}
              alt="Gym Banner"
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  /* The key is essential for triggering the animation on every slide change */
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
                >
                  {slide.title} <br />
                  <span className="text-gray-300">{slide.title2}</span>
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation - Hidden on small mobile to prevent overlap issues */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto hidden md:flex bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md text-white transition-all"
        >
          <i className="ri-arrow-left-s-line text-3xl"></i>
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto hidden md:flex bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md text-white transition-all"
        >
          <i className="ri-arrow-right-s-line text-3xl"></i>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index ? "bg-white w-12" : "bg-white/30 w-4"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home_banner1;
