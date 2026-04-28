import React from "react";
import { motion } from "framer-motion";

const Home_stats = () => {
  return (
    <>
      <div className="h-auto p-10 md:h-[90vh] w-full bg-black flex flex-wrap justify-around items-center">
        <img
          src="/images/stats.jpg"
          alt=""
          className="h-80 w-180 lg:h-110 lg:w-160"
        />
        <div className="flex flex-col gap-5 text-white mr-10">
          <h1 className="text-5xl lg:text-7xl p-4 w-70 md:w-150 lg:w-180 font-bold">
            Project Tactics And Strategies
          </h1>
          <p className="text-xl w-80 lg:w-160 text-gray-500 mt-5">
            Discover the proven methods and techniques that will help you
            achieve your fitness goals.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center flex-wrap gap-10 p-4"
          >
            <div>
              <h1 className="uppercase text-6xl">20k</h1>
              <p className="capitalize text-3xl text-gray-500">
                Calories Burnt
              </p>
            </div>

            <div>
              <h1 className="uppercase text-6xl">100</h1>
              <p className="capitalize text-3xl text-gray-500">Professionals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home_stats;
