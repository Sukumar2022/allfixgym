import React from 'react'
import TeamCard from '../component/UI/TeamCard'

const Home_team = () => {
  return (
    <>
        <section className="h-auto w-full bg-[#192124] flex flex-col items-center justify-center p-4">
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-white text-4xl md:text-6xl capitalize'> our expert team</h1>
                <p className='text-gray-500 text-xl md:text-2xl text-center'> Meet our team of certified trainers and fitness experts dedicated to helping you achieve your goals.</p>
            </div>
            <div className='w-full h-auto mt-10 flex flex-col flex-wrap md:flex-row items-center justify-center gap-6 px-4'>
                <TeamCard img="/images/team1.jpg" name="John Doe" role="Fitness Trainer"/>
                <TeamCard img="/images/team2.jpg" name="Jane Smith" role="Personal Trainer"/>
                <TeamCard img="/images/team3.jpg" name="Mike Johnson" role="Yoga Instructor"/>
                <TeamCard img="/images/team4.jpg" name="Mike Johnson" role="Health Coach"/>
            </div>
            
        </section>
    </>
  )
}

export default Home_team