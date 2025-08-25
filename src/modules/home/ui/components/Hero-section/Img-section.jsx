"use client"

import React from 'react'
import dynamic from "next/dynamic";
import FloatingCard from './FloatingCard'
import { Herocards } from '@/constants/constants'
import { motion } from 'framer-motion'

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});
function ImgSection() {

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
    variants={fadeInRight}
    initial="hidden"
    animate="visible"
    transition={{duration:0.5,ease:"easeIn"}}
    
    className='relative flex md:w-[50%]  md:mt-50 justify-center'>
      {/* <div className='md:w-[500px] md:h-[500px]  w-[346px] h-[346px] rounded-3xl bg-primary/90'> */}
      <div className='md:w-[500px] relative md:h-[500px] xs:w-[300px] xs:h-[300px]  w-[346px] h-[346px]  rounded-3xl bg-primary/90'>
      <div className="absolute xs:w-[300px] xs:h-[300px]   md:w-[500px] md:right-8 md:bottom-6 lg:bottom-4 lg:right-4 right-4 bottom-4   md:h-[500px] w-[346px] h-[346px] rounded-3xl bg-white">
      <Spline
          scene="https://prod.spline.design/pUAhlUc8ae8LihfT/scene.splinecode"
          className="absolute inset-0 z-0 h-full w-full !bg-transparent"
        />
        {Herocards.map((card)=>(

          <FloatingCard
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5}}
          

          icon={card.icon} name={card.name} location={card.location} animate={card.animate} />

        
        ))}
        </div>
      </div>

    </motion.div>
  )
}

export default ImgSection
