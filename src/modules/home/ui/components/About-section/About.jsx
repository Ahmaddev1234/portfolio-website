
import React from 'react'
import Text from './Text'
import Img from './ImgSection'
function About() {
  
    const fadeInLeft = {
    hidden: { opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 640 ? -20 : -200 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
    id='aboutUs'
    className='flex flex-col md:px-32 xs:px-4 py-12 gap-12 '>
      <div className=''>
        <div className='w-[20%] flex gap-2 items-center font-quicksand'>
            <h2 className='text-[36px] font-semibold text-tertiary'>About </h2>
            <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary'>Learn about my journey, skills, and the values that guide my approach to every project</p>
        </div>
        <div className='flex md:flex-col lg:flex-row xs:flex-col '>
          <Img/>
          <Text/>
        </div>
    </div>
  )
}

export default About
