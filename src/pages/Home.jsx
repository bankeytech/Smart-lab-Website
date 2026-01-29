import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import HowWeWork from '../components/HowWeWork'
import CTA from '../components/CTA'
import FeaturedProject from '../components/FeaturedProject'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <FeaturedProject />
      <CTA />
    </div>
  )
}

export default Home
