import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageFeature = () => {
  const cards = [
    { url: '/images/imgSlide.jpg', id: 1 },
    { url: '/images/imgSlide2.jpg', id: 2 },
    { url: '/images/imgSlide3.jpg', id: 3 },
    { url: '/images/imgSlide4.jpg', id: 4 },
    { url: '/images/imgSlide5.jpg', id: 5 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    /* Increased min-h to accommodate taller images */
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-10 md:p-20 min-h-[900px] overflow-hidden">
      
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 z-10 mb-20 md:mb-0">
        <h1 className="text-7xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
          Push Your <br /> <span className="text-gray-500">Limits</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-md italic">
          Experience world-class training and state-of-the-art equipment designed to help you reach your peak physical condition.
        </p>
      </div>

      {/* Right Side: Tilted Auto-Swiping Cards */}
      <div className="md:w-1/2 relative flex justify-center items-center h-[700px] w-full">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0, rotate: 20 }}
            animate={{ x: 0, opacity: 1, rotate: 20 }}
            exit={{ x: -300, opacity: 0, rotate: 20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            /* Updated Heights:
               Mobile: h-[500px]
               Desktop: md:h-[650px] 
            */
            className="absolute w-72 h-[500px] md:w-[450px] md:h-[650px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-white/5 z-20"
          >
            <img 
              src={cards[index].url} 
              alt="Gym training" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative Background Card (Static tilt) */}
        {/* Height matched to the main image card */}
        <div className="absolute w-72 h-[500px] md:w-[450px] md:h-[650px] border border-white/20 rounded-3xl rotate-[20deg] z-0 translate-x-6 translate-y-6 opacity-50" />
      </div>
    </div>
  );
};

export default ImageFeature;