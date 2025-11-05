import Footer from '@/components/common/Footer/Footer'
import GroupTherapy from '@/components/Reservation/GroupTherapy/GroupTherapy'
import Questions from '@/components/Home/Questions/Questions'
import ReservePoster from '@/components/Home/ReservePoster/ReservePoster'
import React from 'react'

const page = () => {
  return (
    <div>
      <GroupTherapy/>
      <Questions/>
      <ReservePoster/>
      <Footer/>
    </div>
  )
}

export default page
