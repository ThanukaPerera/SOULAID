import React from 'react'
import Header from '../../components/Header'
import HeroSection from './HeroSection'
import OurApproach from './OurApproach'
import SafeSpace from './SafeSpace'
import Remote from './Remote'
import OurServices from './OurServices'
import OurTeam from './OurTeam'
import Quote from './Quote'
import Footer from './Footer'
import GetStarted from './GetStarted'






function Home() {
  return (
    <div className='flex flex-col'>
     
     <div >
        <Header/>
      </div>
     <div>
      <HeroSection/>
     </div>
     
      <OurApproach/>
      <SafeSpace/>
      <Remote/>
      <OurServices/>
      <OurTeam/>
      <Quote/>
      <GetStarted/>
      <Footer/>
     
    </div>
    
  )
}

export default Home