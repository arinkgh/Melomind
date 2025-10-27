import ArticleDetail from '@/components/ArticleDetail/ArticleDetail'
import Footer from '@/components/common/Footer/Footer'
import ReservePoster from '@/components/Home/ReservePoster/ReservePoster'
import React from 'react'

// interface Slug {
//   params: { id: string };
// }

const page = () => {     //{params} : Slug
  // const {id} = params;
  // const res = {
  //   "id" : 1,
  //   "title" : "How mindful improves mental health"
  // }
  return (
    <div>
      {/* item={res} */}
      <ArticleDetail />  
      <ReservePoster/>
      <Footer/>
    </div>
  )
}

export default page
