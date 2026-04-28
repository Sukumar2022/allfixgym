import React from 'react'
import Home_banner1 from './Home_banner1'
import TextSlider from '../component/UI/TextSlider'
import ImageFeature from '../component/UI/ImageFeature'
import FeatureCards from '../component/UI/FeatureCards'
import Home_team from './Home_team'
import Home_stats from './Home_stats'
import Home_news from './Home_news'

const Home = () => {
  return (
    <>
      <Home_banner1/>  
      <TextSlider/>
      <ImageFeature/>
      <FeatureCards/>
      <Home_team/>
      <Home_stats/>
      <Home_news/>
    </>
  )
}

export default Home