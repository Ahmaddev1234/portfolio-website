import React from 'react'
import Breadcrumbs from './Breadcrumbs'

function Navbar() {
  return (
    <div className='w-full bg-[#F7FAFF] flex justify-around  items-center py-[25px]'>
      <h1 className='text-[24px] font-semibold text-primary'>Portfolio Details</h1>
      <p className='text-[24px] font-semibold text-primary'><Breadcrumbs/></p>
    </div>
  )
}

export default Navbar
