import React from 'react'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

const HeroService = () => {
  return (
    <div 
    // className=' container mx-auto  flex  flex-row md:justify-between justify-center items-center mt-22'
    className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-10">
      {/* Text */}
      <HeroText/>
      {/* Image */}
      <HeroImage/>
    </div>
  )
}

export default HeroService
