import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // 1. Define your social media links here
  const socialLinks = [
    { name: 'ig.', url: 'https://instagram.com/allfixgym' },
    { name: 'fb.', url: 'https://facebook.com/allfixgym' }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-[#42f2f2]">
            AllFixGym
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            At AllFixGym, we are dedicated to helping you achieve your fitness goals with top-notch equipment, expert trainers, and a supportive community. Join us and experience the difference!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-widest">Links</h3>
          <ul className="flex flex-col space-y-3 text-gray-400">
            {['About Us', 'Fitness News', 'Timetable', 'Fitness Coaches', 'Contact us', 'FAQ'].map((item) => (
              <Link 
                key={item} 
                /* These links match your standard page routes */
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="hover:text-[#42f2f2] transition-colors"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-widest">Contact</h3>
          <div className="text-gray-400 space-y-4 not-italic">
            <p>Beldubi - Jadabbati Rd, Kuldanga,<br /> West Bengal 711302</p>
           
            <a href="mailto:allfixgym@example.com" className="block hover:text-white transition-colors">
              allfixgym@example.com
            </a>
            <a href="tel:+918013132647" className="block hover:text-white transition-colors">
              08013132647
            </a>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-bold uppercase tracking-widest">Newsletter</h3>
          <form className="relative group max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-700 py-2 outline-none focus:border-[#42f2f2] transition-colors placeholder:text-gray-600"
            />
            <button type="submit" className="absolute right-0 bottom-2 text-gray-500 group-hover:text-white transition-colors">
              <i className="ri-arrow-right-up-line text-xl"></i>
            </button>
          </form>
          
          {/* Social Media Links Added Here */}
          <div className="flex space-x-6 font-bold text-lg">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="hover:text-[#42f2f2] transition-all"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>
          All Rights Reserved © 2026 
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-1 hover:text-[#42f2f2] transition-colors"
          >
            SM_Interactive
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;