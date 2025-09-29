import Footer from '@/components/common/Footer/Footer'
import Questions from '@/components/Home/Questions/Questions'
import ReservePoster from '@/components/Home/ReservePoster/ReservePoster'
import AdditionalText from '@/components/Service/AdditionalText/AdditionalText'
import BookingService from '@/components/Service/BookingService/BookingService'
import ListService from '@/components/Service/ListService/ListService'
import Service from '@/components/Service/Service'
import React from 'react'

const page = () => {
  return (
    <div>
      <Service/>
      <ListService/>
      <AdditionalText/>
      <BookingService/>
      <Questions/>
      <ReservePoster/>
      <Footer/>
    </div>
  )
}

export default page
