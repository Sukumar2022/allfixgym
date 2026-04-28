import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Replace with your actual WhatsApp number (include country code, no "+" or "-")
  const phoneNumber = "918013132647"; 
  const message = encodeURIComponent("Hello AllFixGym! I'm interested in joining the gym. Can I get more details about the membership plans?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-black text-white pt-28 pb-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
          >
            Get In <span className="text-[#42f2f2]">Touch</span>
          </motion.h1>
          <p className="text-gray-400 mt-4 text-lg md:text-xl italic">
            Have questions? We're here to help you start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info & WhatsApp */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactInfo 
                icon="ri-map-pin-2-line" 
                title="Location" 
                detail="Beldubi - Jadabbati Rd, Kuldanga, West Bengal 711302" 
              />
              <ContactInfo 
                icon="ri-mail-line" 
                title="Email Us" 
                detail="allfixgym@example.com" 
              />
            </div>

            {/* WhatsApp Premium Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#111] p-8 rounded-3xl border border-[#25D366]/30 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <i className="ri-whatsapp-line text-5xl text-[#25D366] mb-4 block"></i>
                <h3 className="text-2xl font-bold uppercase mb-2">Chat on WhatsApp</h3>
                <p className="text-gray-400 mb-6">
                  Get instant replies from our team regarding trainers, diet plans, or memberships.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold px-8 py-4 rounded-full uppercase tracking-widest hover:bg-white transition-all"
                >
                  Message Now <i className="ri-external-link-line"></i>
                </a>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#25D366]/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase font-bold text-gray-500">Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#42f2f2] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase font-bold text-gray-500">Phone</label>
                  <input type="tel" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#42f2f2] outline-none transition-all" placeholder="+91 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase font-bold text-gray-500">Message</label>
                <textarea rows="4" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-[#42f2f2] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-[#42f2f2] text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] hover:bg-white transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center border border-white/5">
      <i className={`${icon} text-2xl text-[#42f2f2]`}></i>
    </div>
    <div>
      <h4 className="font-bold uppercase text-sm text-gray-500 tracking-widest">{title}</h4>
      <p className="text-gray-200 mt-1">{detail}</p>
    </div>
  </div>
);

export default Contact;