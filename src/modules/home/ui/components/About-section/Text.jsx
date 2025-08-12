import React from 'react'
import { Code, Camera, Cookie } from 'lucide-react'
import SkillItem from './SkillItem'
import EduCard from './EduCard'
import { Button } from '@/components/ui/button'
function Text() {

    const cardItems = [
        { icon: Cookie, name: "UI/UX Design", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" },
        { icon: Code, name: "Frontend Dev", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" },
        { icon: Camera, name: "Photography", Desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar" }
    ]

    const EduItems=[
        {year:2019, desc:"Graduated with B.A. in Digital Design from Creative University"},
        {year:2021, desc:"Graduated with M.A. in Digital Design from Creative University"},
        {year:2023, desc:"Graduated with M.Phill. in Digital Design from Creative University"}
    ]
    return (
        <div className='flex flex-col gap-8 lg:w-[60%] md:w-[100%] xs:w-[100%]'>
            <h2 className='md:text-[40px] xs:text-[32px] xs:text-center md:text-left font-bold text-tertiary'>
                Hi, I'm Ahmad - a Creative Developer
            </h2>
            <p className='text-base text-secondary xs:text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>

            <div className='grid gap-4 md:grid-cols-2  xl:grid-cols-3 xs:grid-cols-1'>
                {cardItems.map((item) => (
                    <SkillItem icon={item.icon} name={item.name} Desc={item.Desc} />
                ))}
            </div>

            <div className='flex flex-col gap-4'>
                {EduItems.map((item)=>(
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
