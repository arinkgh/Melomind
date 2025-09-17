import React from 'react'
import HeaderLogin from './HeaderLogin'
import HeaderItems from './HeaderItems'

const HeaderWrapper = () => {
  return (
    <div className='container mx-auto flex flex-row justify-between border h-36'>
        <HeaderItems/>
        <HeaderLogin/>
    </div>
  )
}

export default HeaderWrapper
