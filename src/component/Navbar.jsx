import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: 'ri-home-4-line' },
    { name: 'About', path: '/about', icon: 'ri-user-line' },
    { name: 'Contact', path: '/contact', icon: 'ri-mail-line' },
  ];

  return (
    <nav className='h-20 fixed top-0 left-0 right-0 bg-black text-white flex items-center justify-between z-[100] px-6 md:px-10 border-b border-white/10'>
      {/* Logo */}
      <Link to={'/'} className='hover:text-white text-2xl md:text-3xl font-bold text-gray-400 tracking-tighter uppercase relative z-[110]'>
        AllFix <span className="text-white">Gym</span>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center space-x-8 uppercase text-lg font-black tracking-widest text-gray-400'>
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            /* style active links with your brand color */
            className={({ isActive }) => 
              isActive ? 'text-[#42f2f2]' : 'hover:text-white transition-all duration-300'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className='md:hidden text-gray-400 hover:text-white text-3xl focus:outline-none z-[110] transition-transform duration-300 active:scale-90'
      >
        <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
      </button>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-black/95 backdrop-blur-xl transform transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] md:hidden z-[105] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-col items-start justify-start space-y-8 pt-32 pl-10 uppercase text-3xl font-black text-gray-400'>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className='hover:text-white flex items-center gap-5 transition-colors group'
            >
              <i className={`${link.icon} text-[#42f2f2] opacity-70 group-hover:opacity-100`}></i>
              <span>{link.name}</span>
            </Link>
          ))}
          
          {/* Quick Contact / Social link in Mobile Menu */}
          <div className="pt-10 space-y-4">
             <a 
              href="https://wa.me/918013132647" 
              className="text-sm bg-[#42f2f2] text-black px-6 py-3 rounded-full flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              JOIN NOW <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </ul>
      </div>

      {/* Dark Overlay when Mobile Menu is open */}
      <div 
        onClick={toggleMenu} 
        className={`fixed inset-0 bg-black/60 md:hidden z-[102] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />
    </nav>
  );
};

export default Navbar;