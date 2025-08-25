"use client"
import React from 'react'
import ContactInfo from './ContactInfo'
import GetInTouch from './GetInTouch'
import { motion } from 'framer-motion'
function ContactUs() {
  return (
    <motion.div
    initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.1}}
        id='contactUs'
    className='flex flex-col md:px-32 xs:px-4 bg-[#f7faff] py-12 gap-14'>
      <div className=''>
      <div className='w-[20%] flex gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Contact </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
      </div>
      <p className='text-[16px] text-secondary'>Get in touch today to discuss your project ideas, collaborations, or service requirements.</p>
      </div>
      <div className='flex lg:flex-row xs:flex-col gap-14'>
        <ContactInfo/>
        <GetInTouch/>
      </div>
    </motion.div>
  )
}

export default ContactUs
