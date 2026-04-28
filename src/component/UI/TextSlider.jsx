import React from 'react';

const TextSlider = () => {
  const scrollingText = "Step Toward A Healthier, Stronger You	 • ELEVATE YOUR FITNESS • TRANSFORM PAIN INTO POWER • ALLFIX GYM • ";

  return (
    <div className="h-[10vh] relative flex overflow-x-hidden bg-black py-4 border-y border-white/10">
      {/* Container for the moving text */}
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-white text-4xl font-black uppercase tracking-widest mx-4">
          {scrollingText}
        </span>
        <span className="text-white text-4xl font-black uppercase tracking-widest mx-4">
          {scrollingText}
        </span>
      </div>

      {/* Second container for seamless looping */}
      <div className="absolute top-4 flex animate-marquee whitespace-nowrap">
        <span className="text-white text-4xl font-black uppercase tracking-widest mx-4">
          {scrollingText}
        </span>
        <span className="text-white text-4xl font-black uppercase tracking-widest mx-4">
          {scrollingText}
        </span>
      </div>
    </div>
  );
};

export default TextSlider;