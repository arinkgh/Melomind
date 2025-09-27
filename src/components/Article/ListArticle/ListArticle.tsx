import DetailTitles from '@/components/common/DetailTitles/DetailTitles'
import React from 'react'
import FilterArticle from './FilterArticle'
import CardArticle from './CardArticle'

const ListArticle = () => {
  return (
    <div className=' container mx-auto mt-20 flex flex-col gap-8'>
        {/* Title */} 
        <DetailTitles subtitle='مقالات ملومایند' title='لیست مقالات'/>
        {/* Main */}
        <div className=' w-full flex flex-row gap-10'>
          {/* Filter */}
          <FilterArticle/>
          {/* Card */}
          <CardArticle/>
        </div>
    </div>
  )
}

export default ListArticle
