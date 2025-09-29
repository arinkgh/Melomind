import React from 'react'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

const HeroService = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-16">
      {/* Text */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <HeroText />
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <HeroImage />
      </div>
    </div>
  )
}

export default HeroService