import NewArticles from '@/components/Article/NewArticles/NewArticles'
import SearchArticle from '@/components/Article/Search/SearchArticle'
import Slider from '@/components/Article/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
      <Slider/>
      <SearchArticle/>
      <NewArticles/>
    </div>
  )
}

export default page
