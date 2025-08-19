import React from 'react'
import ContactInfo from './ContactInfo'
import GetInTouch from './GetInTouch'

function ContactUs() {
  return (
    <div className='flex flex-col md:px-32 xs:px-4 bg-[#f7faff] py-12 gap-14'>
      <div className=''>
      <div className='w-[20%] flex gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Contact </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
      </div>
      <p className='text-[16px] text-secondary'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='flex lg:flex-row xs:flex-col gap-14'>
        <ContactInfo/>
        <GetInTouch/>
      </div>
    </div>
  )
}

export default ContactUs
