"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { MoveDiagonal, MoveRight } from 'lucide-react'
import Preview from './Preview'
import { PROJECTS } from '@/constants/constants'

function ProjectCard({ Project }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handlePreview = () => {
    setIsOpen(true)
  }


  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.15, 
      },
    },
  }

  
  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  }


  const handleDetails=()=>{
    router.push(`/${Project.id}`)
  }



  return (
    <motion.div
      className='w-full h-56 flex items-center justify-left rounded-lg overflow-hidden bg-cover bg-center shadow-[0_0px_20px_rgba(173,194,210,0.2)]'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: `url(${Project.images[0]})`,
        position: "relative",
      }}
    >
      {isOpen && <Preview Project={Project} setIsOpen={setIsOpen} />}

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900/100 to-white/20"
      />

      <motion.div
        className='flex flex-col gap-6 p-8 justify-left absolute'
        variants={containerVariants}
        initial="hidden"
        animate={hovered ? "show" : "hidden"}
      >
        <motion.h3 variants={childVariants} className='text-[16px] text-primary'>
          {Project.name}
        </motion.h3>
        <motion.h2 variants={childVariants} className='text-[24px] text-white'>
          {Project.name}
        </motion.h2>

        <motion.div variants={containerVariants} className='flex gap-4'>
          <motion.div
          onClick={handleDetails}
            variants={childVariants}
            className='bg-white w-12 h-12 group rounded-xl flex items-center cursor-pointer justify-center hover:bg-primary hover:text-white'
          >
            <MoveRight className='text-primary group-hover:text-white' strokeWidth={1} />
          </motion.div>
          <motion.div
            variants={childVariants}
            onClick={handlePreview}
            className='bg-white w-12 h-12 rounded-xl group cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white'
          >
            <MoveDiagonal className='text-primary group-hover:text-white' strokeWidth={1} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
