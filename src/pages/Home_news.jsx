import React from 'react';

const Home_news = () => {
  // Replace these with your actual image paths from public/images
  const galleryImages = [
    '/images/g1.jpg',
    '/images/g2.jpg',
    '/images/g3.jpg',
    '/images/g4.jpg',
    '/images/g5.jpg',
    '/images/g6.jpg',
  ];

  return (
    <section className="bg-black text-white pt-20">
      {/* Newsletter Content */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Newsletter</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-10">
            Subscribe to our newsletter to get the latest updates and offers from AllFixGym. Stay connected and never miss out on our exciting news!
        </p>

        {/* Minimalist Input Field */}
        <form className="relative max-w-xl mx-auto group">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-700 py-3 pr-10 outline-none focus:border-white transition-colors placeholder:text-gray-600"
            required
          />
          <button 
            type="submit" 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white transition-colors"
          >
            <i className="ri-arrow-right-up-line text-2xl"></i>
          </button>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {galleryImages.map((src, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden group cursor-pointer relative"
          >
            {/* Image */}
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <i className="ri-instagram-line text-white text-3xl"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home_news;