"use client"
import { Building, Calendar, Link2, ClipboardList, AlertTriangle, Lightbulb, CheckCircle, Sparkles } from 'lucide-react'
import React from 'react'
import DetailsAccordion from './DetailsAccordion'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/constants/constants'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
function PortfolioDetailsContent({ Project }) {
  const router = useRouter();
  const handleNextProject = () => {
    const projectId = PROJECTS.findIndex((project) => (
      project.id == Project.id
    ))
    const nextProjectId = PROJECTS[projectId + 1].id
    router.push(`/${nextProjectId}`)

  }

  return (
    <div className='flex flex-col lg:w-[50%] xs:w-[100%] text-secondary px-4 gap-6'>
      <motion.div
        initial={{ opacity: 0, y: 80, x: typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 1 }}
        className='flex justify-between items-center '>
        <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
          UI/UX
        </div>

        <div className='flex gap-4'>
          <div className='flex items-center gap-1'>
            <Calendar strokeWidth={1} size={14} className='text-primary' />
            <p className='text-[14px]'>{Project.date}</p>
          </div>
          <div className='flex items-center gap-1'>
            <Building strokeWidth={1} size={14} className='text-primary' />
            <p className='text-[14px]'>ItMate solutions</p>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 80, x: typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 1 }}
        className='text-[36px] font-bold text-tertiary'>
        {Project.name}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 80, x: typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 1 }}
      >
        <Link href={Project.link} className='flex gap-2 text-primary font-semibold'>
          <Link2 />
          <p>{Project.link}</p>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 80, x: typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 1 }}
        className='mb-4'>
        {Project.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <DetailsAccordion title={"Project Overview"} Icon={ClipboardList} detail={Project.projectOverview} />
        <DetailsAccordion title={"The Challenge"} Icon={AlertTriangle} detail={Project.challenge} />
        <DetailsAccordion title={"The Solution"} Icon={Lightbulb} detail={Project.solution} />
      </motion.div>
      <div className='w-full flex flex-col gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-[20px] flex  text-tertiary gap-2 items-center'>
          <div className='text-primary'><Sparkles fill="currentColor" size={20} /></div>
          <div>
            Key Features
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
          className='grid sm:grid-cols-2 xs:grid-cols-1 gap-4 '>
          {Project.keyFeatures.map((feature) => (
            <div className='flex gap-3 text-tertiary items-center'>
              <CheckCircle className='text-primary' size={16} />
              <p className='text-[15px]'>{feature}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
          className='flex sm:flex-row xs:flex-col gap-4'>
          <Button variant="primary">View Live Project</Button>
          <Button variant="outline" onClick={handleNextProject} >Next Project</Button>
        </motion.div>


      </div>


    </div>
  )
}

export default PortfolioDetailsContent
