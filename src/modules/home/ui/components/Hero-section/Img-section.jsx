"use client"

import React from 'react'
import FloatingCard from './FloatingCard'
import { Herocards } from '@/constants/constants'

function ImgSection() {
  return (
    <div className='relative flex md:w-[50%]  md:mt-50 justify-center'>
      {/* <div className='md:w-[500px] md:h-[500px]  w-[346px] h-[346px] rounded-3xl bg-primary/90'> */}
      <div className='md:w-[500px] relative md:h-[500px] xs:w-[300px] xs:h-[300px]  w-[346px] h-[346px]  rounded-3xl bg-primary/90'>
      <div className="absolute xs:w-[300px] xs:h-[300px]   md:w-[500px] md:right-8 md:bottom-6 lg:bottom-4 lg:right-4 right-4 bottom-4   md:h-[500px] w-[346px] h-[346px] rounded-3xl bg-[url('/profile-img3.webp')] bg-cover bg-center">
        {Herocards.map((card)=>(

          <FloatingCard icon={card.icon} name={card.name} location={card.location} animate={card.animate} />

        
        ))}
        </div>
      </div>

    </div>
  )
}

export default ImgSection
