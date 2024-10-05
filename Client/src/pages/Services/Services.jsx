import React from 'react'
import Header from '../../components/Header'
import HeroSectionInOtherPages from '../../components/HeroSectionInOtherPages'
import OurServices from './OurServices'



function Services() {
  return (
    <div>
        <Header/>
        <HeroSectionInOtherPages image='family.jpg' alt='family' heading='Get treatment for all your mental healthcare needs.'/>
        <OurServices/>
    </div>
  )
}

export default Services