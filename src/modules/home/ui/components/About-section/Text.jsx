import React from 'react'
import { AboutCardItems,AboutEduItems } from '@/constants/constants'

import SkillItem from './SkillItem'
import EduCard from './EduCard'
import { Button } from '@/components/ui/button'
function Text() {


    return (
        <div className='flex flex-col gap-8 lg:w-[60%] md:w-[100%] xs:w-[100%]'>
            <h2 className='md:text-[40px] xs:text-[32px] xs:text-center md:text-left font-bold text-tertiary font-quicksand'>
                Hi, I'm Ahmad - a Creative Developer
            </h2>
            <p className='text-base text-secondary xs:text-center md:text-left font-quicksand'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>

            <div className='grid gap-4 md:grid-cols-2  xl:grid-cols-3 xs:grid-cols-1'>
                {AboutCardItems.map((item) => (
                    <SkillItem icon={item.icon} name={item.name} Desc={item.Desc} />
                ))}
            </div>

            <div className='flex flex-col gap-4'>
                {AboutEduItems.map((item)=>(
                    <EduCard year={item.year} desc={item.desc}/>
                ))}
            </div>

            <div className='  rounded-full bg-[#f0f6fc] text-center py-4 px-4 font-semibold'>
                ☕ <span className='text-secondary '>Coffee-fueled designer based in Portland</span>
            </div>
            <div className='flex md:flex-row xs:flex-col md:gap-8 xs:gap-4 justify-center items-center'>
                <Button variant="primary">
                    View My Work
                </Button>
                <Button variant="outline">
                    Download Resume
                </Button>
            </div>
        </div>


    )
}

export default Text
