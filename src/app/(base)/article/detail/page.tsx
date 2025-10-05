import ArticleDetail from '@/components/ArticleDetail/ArticleDetail'
import Footer from '@/components/common/Footer/Footer'
import ReservePoster from '@/components/Home/ReservePoster/ReservePoster'
import React from 'react'

const page = () => {
  return (
    <div>
      <ArticleDetail/>
      <ReservePoster/>
      <Footer/>
    </div>
  )
}

export default page
