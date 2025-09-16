import React from 'react'
import HeaderLogin from './HeaderLogin'
import HeaderItems from './HeaderItems'

const HeaderWrapper = () => {
  return (
    <div className='flex flex-row justify-between w-full border h-36'>
        <HeaderItems/>
        <HeaderLogin/>
    </div>
  )
}

export default HeaderWrapper
