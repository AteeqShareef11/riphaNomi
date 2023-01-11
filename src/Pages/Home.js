import React from 'react'
import CustomizedAccordions from '../components/CustomizeAccordians';
import EasyAdmision from '../components/EasyAdmision';
import Events from '../components/Events';
import Hero from '../components/Hero'
import LifeAtRipha from '../components/LifeAtRipha';
import Ranking from '../components/Ranking';
import AboutUs from './../components/AboutUs';
import Programs from './../components/Programs';
import NewsLetter from './../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Programs />
      <EasyAdmision />
      <div className='w-full bg-bgColor'>
        <div className='w-[80%]  m-auto py-20'>
          <CustomizedAccordions />
        </div>
      </div>
      <LifeAtRipha />
      <Ranking />
      <Events />
      <NewsLetter />

    </div>
  )
}

export default Home