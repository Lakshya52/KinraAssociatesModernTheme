import React from 'react'
import Hero from '../components/landing/Hero'
import Intro from '../components/landing/Intro'
import CoreValues from '../components/landing/CoreValues'
import HeroNew from '../components/landing/HeroNew'


const Landing = () => {
  return (
    <>

      <HeroNew />
      {/* <Hero /> */}
      <Intro />
      <CoreValues />

    </>
  )
}

export default Landing