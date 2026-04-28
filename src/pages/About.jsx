import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Expert Trainers', value: '15+' },
    { label: 'Modern Equipment', value: '100+' },
    { label: 'Happy Members', value: '1k+' },
    { label: 'Success Stories', value: '500+' },
  ];

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
        >
          We Are <span className="text-[#42f2f2]">AllFixGym</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl italic">
          Breaking barriers and setting new standards in fitness since 2024.
        </p>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-[#42f2f2]/30 rounded-2xl group-hover:border-[#42f2f2] transition-colors duration-500"></div>
          <img 
            src="/images/about.jpg" 
            alt="Our Gym" 
            className="rounded-xl w-full h-[500px] object-cover relative z-10"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Our Story & <span className="text-gray-500 text-3xl md:text-5xl">Vision</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Located in the heart of Kuldanga, AllFixGym started with a simple mission: to provide a premium fitness environment accessible to everyone. We noticed that many gyms were either too intimidating or lacked the proper equipment to actually see results.
            </p>
            <p>
              We "fixed" that. By combining state-of-the-art technology with a community-driven atmosphere, we've created a space where elite athletes and fitness beginners can train side-by-side.
            </p>
          </div>
          <button className="bg-[#42f2f2] text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all rounded-full">
            Join the Movement
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111] py-20 px-6 md:px-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-5xl md:text-6xl font-black text-[#42f2f2]">{stat.value}</h3>
              <p className="text-gray-500 uppercase font-bold tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Why Choose Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon="ri-shield-check-line"
            title="Safe Environment"
            desc="Top-tier hygiene protocols and 24/7 security for your peace of mind."
          />
          <ValueCard 
            icon="ri-temp-hot-line"
            title="Advanced Gear"
            desc="From hammer strength to cardio machines, we only house the best."
          />
          <ValueCard 
            icon="ri-team-line"
            title="Elite Coaches"
            desc="Our trainers aren't just staff—they are certified transformation experts."
          />
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-10 bg-[#111] rounded-3xl border border-white/5 hover:border-[#42f2f2]/50 transition-all group">
    <i className={`${icon} text-5xl text-[#42f2f2] mb-6 block group-hover:scale-110 transition-transform`}></i>
    <h3 className="text-2xl font-bold mb-4 uppercase">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default About;