import Footer from '@/components/common/Footer/Footer'
import Questions from '@/components/Home/Questions/Questions'
import ReservePoster from '@/components/Home/ReservePoster/ReservePoster'
import Service from '@/components/Service/Service'
import React from 'react'

const page = () => {
  return (
    <div>
      <Service/>

      <Questions/>
      <ReservePoster/>
      <Footer/>
    </div>
  )
}

export default page
