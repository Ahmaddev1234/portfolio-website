"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { PROJECTS } from '@/constants/constants'
import PortfolioDetailsMedia from './PortfolioDetailsMedia'
import PortfolioDetailsContent from './PortfolioDetailsContent'
import Footer from '@/modules/home/ui/components/Footer-section/Footer'

function Details({id}) {
    
    const Project=PROJECTS.find(project => project.id == id);
  
    
    
  
  return (
    <div className='flex flex-col w-full'>
      <Navbar/>
      <div className='flex lg:flex-row xs:flex-col w-full lg:px-28 gap-4 py-22'>
        <PortfolioDetailsMedia Project={Project}/>
        <PortfolioDetailsContent Project={Project} />
      </div>
      <Footer/>
    </div>
  )
}

export default Details
