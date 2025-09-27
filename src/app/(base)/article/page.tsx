import ListArticle from '@/components/Article/ListArticle/ListArticle'
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
      <ListArticle/>
    </div>
  )
}

export default page
