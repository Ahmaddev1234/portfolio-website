import { Building, Calendar, Link2, ClipboardList, AlertTriangle, Lightbulb,CheckCircle,Sparkles } from 'lucide-react'
import React from 'react'
import DetailsAccordion from './DetailsAccordion'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/constants/constants'
import { useRouter } from 'next/navigation'

function PortfolioDetailsContent({ Project }) {
  const router=useRouter();
  const handleNextProject=()=>{
    const projectId=PROJECTS.findIndex((project)=>(
      project.id == Project.id
    ))
    const nextProjectId=PROJECTS[projectId + 1].id
    router.push(`/${nextProjectId}`)
    
  }

  return (
    <div className='flex flex-col lg:w-[50%] xs:w-[100%] text-secondary px-4 gap-6'>
      <div className='flex justify-between items-center '>
        <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
          UI/UX
        </div>

        <div className='flex gap-4'>
          <div className='flex items-center gap-1'>
            <Calendar strokeWidth={1} size={14} className='text-primary' />
            <p className='text-[14px]'>September 2024</p>
          </div>
          <div className='flex items-center gap-1'>
            <Building strokeWidth={1} size={14} className='text-primary' />
            <p className='text-[14px]'>September 2024</p>
          </div>
        </div>
      </div>

      <h1 className='text-[36px] font-bold text-tertiary'>
        {Project.name}
      </h1>
      <a href={Project.link} className='flex gap-2 text-primary font-semibold'>
        <Link2 />
        <p>{Project.link}</p>
      </a>
      <p className='mb-4'>
        {Project.description}
      </p>
      <div >
        <DetailsAccordion title={"Project Overview"} Icon={ClipboardList} detail={Project.projectOverview} />
        <DetailsAccordion title={"The Challenge"} Icon={AlertTriangle} detail={Project.challenge} />
        <DetailsAccordion title={"The Solution"} Icon={Lightbulb} detail={Project.solution} />
      </div>
      <div className='w-full flex flex-col gap-8'>
        <div className='text-[20px] flex  text-tertiary gap-2 items-center'>
          <div className='text-primary'><Sparkles fill="currentColor" size={20}/></div>
          <div>
           Key Features
          </div>
        </div>
        <div className='grid sm:grid-cols-2 xs:grid-cols-1 gap-4 '>
        {Project.keyFeatures.map((feature)=>(
          <div className='flex gap-3 text-tertiary items-center'>
            <CheckCircle className='text-primary' size={16} />
            <p className='text-[15px]'>{feature}</p>
          </div>
        ))}
        </div>

        <div className='flex sm:flex-row xs:flex-col gap-4'>
          <Button variant="primary">View Live Project</Button>
          <Button variant="outline" onClick={handleNextProject} >Next Project</Button>
        </div>
        
        
      </div>


    </div>
  )
}

export default PortfolioDetailsContent
