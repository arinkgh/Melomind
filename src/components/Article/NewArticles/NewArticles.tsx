import React from 'react'
import ArticleSlider from './ArticleSlider'
import News from './News'

const NewArticles = () => {
  return (
    <div className='border container mx-auto h-[530px] mt-10 flex flex-row justify-between'>
      {/* articles */}
      <ArticleSlider/>
      {/* news */}
      <News/>
    </div>
  )
}

export default NewArticles
