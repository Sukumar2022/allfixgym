import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ img, title, description }) => {
  return (
    <>
      <motion.div  initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className='feature-card h-auto lg:h-60 md:w-auto flex justify-center items-center gap-5 lg:gap-10 p-15 lg:p-4 rounded-3xl'>
        <img src={img} alt='Feature Card' className='h-30 w-30 lg:h-40 lg:w-40' />
        <div className='flex-col justify-start items-center mr-5 text-white'>
          <h2 className='text-3xl font-bold '>{title}</h2>
          <p className= 'mt-2 w-50 lg:w-50 text-sm md:text-lg'>{description}</p>
        </div>
      </motion.div>
    </>
  )
}

export default FeatureCard