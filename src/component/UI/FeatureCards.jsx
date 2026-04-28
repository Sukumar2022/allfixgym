import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureCards = () => {
  return (
    <div className='min-h-[80vh] h-auto w-full flex justify-center items-center flex-wrap bg-black p-10 gap-4 md:gap-20'>
        <FeatureCard img='/images/dumbbell.png' title="Powerlifting" description="Improve your strength and technique with our expert powerlifting training programs." />
        <FeatureCard img='/images/kick.png' title="Kickboxing" description="Dominate the ring with our intense kickboxing training sessions." />
        <FeatureCard img='/images/pilates.png' title="Pilates" description="Enhance flexibility, balance, and mental clarity through our diverse pilates offerings." />
        <FeatureCard img='/images/body-building.png' title="Bodybuilding" description="Build muscle and increase your lifting capacity with our comprehensive bodybuilding plans." />
        <FeatureCard img='/images/yoga.png' title="Yoga" description="Find balance and inner peace with our diverse yoga classes, suitable for all levels." />
        <FeatureCard img='/images/crossfit.png' title="CrossFit" description="Experience high-intensity workouts that combine strength and cardio for a full-body challenge." />
    </div>
  )
}

export default FeatureCards