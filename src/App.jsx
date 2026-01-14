import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowWeWork from './components/HowWeWork'
import CTA from './components/CTA'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <WhatWeDo/>
     <HowWeWork/>
     <CTA/>
    </div>
  )
}

export default App