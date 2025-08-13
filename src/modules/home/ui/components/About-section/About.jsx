import React from 'react'
import Text from './Text'
import Img from './ImgSection'

function About() {
  return (
    <div className='flex flex-col md:px-32 xs:px-4 py-12 gap-12'>
      <div className=''>
        <div className='w-[20%] flex gap-2 items-center font-quicksand'>
            <h2 className='text-[36px] font-semibold text-tertiary'>About </h2>
            <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='flex md:flex-col lg:flex-row xs:flex-col '>
          <Img/>
          <Text/>
        </div>
    </div>
  )
}

export default About
