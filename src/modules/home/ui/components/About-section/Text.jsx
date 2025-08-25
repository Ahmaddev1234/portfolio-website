"use client"
import React from 'react'
import { AboutCardItems, AboutEduItems } from '@/constants/constants'
import { motion } from 'framer-motion'

import SkillItem from './SkillItem'
import EduCard from './EduCard'
import { Button } from '@/components/ui/button'
function Text() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className='flex flex-col gap-8 lg:w-[60%] md:w-[100%] xs:w-[100%]'>
            <motion.h2
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}

                className='md:text-[40px] xs:text-[32px] xs:text-center md:text-left font-bold text-tertiary font-quicksand'>
                Hi, I'm Ahmad - a Creative Developer
            </motion.h2>
            <motion.p
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}

                className='text-base text-secondary xs:text-center md:text-left font-quicksand'>Web developers and web designers play key roles in building modern websites. A web developer focuses on coding, structure, and ensuring functionality, while a web designer works on layouts, visuals, and user experience. Together, they create engaging, responsive, and effective websites suited for every purpose.</motion.p>

            <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}

                className='grid gap-4 md:grid-cols-2  xl:grid-cols-3 xs:grid-cols-1'>
                {AboutCardItems.map((item) => (
                    <SkillItem icon={item.icon} name={item.name} Desc={item.Desc} />
                ))}
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className='flex flex-col gap-4'>
                {AboutEduItems.map((item) => (
                    <EduCard year={item.year} desc={item.desc} />
                ))}
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}

                className='  rounded-full bg-[#f0f6fc] text-center py-4 px-4 font-semibold'>
                ☕ <span className='text-secondary '>Coffee-fueled designer based in Pakistan</span>
            </motion.div>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className='flex md:flex-row xs:flex-col md:gap-8 xs:gap-4 justify-center items-center'>
                <Button variant="primary">
                    <a href="#portfolio">
                        View My Work
                    </a>
                </Button>
                <Button variant="outline">
                    Download Resume
                </Button>
            </motion.div>
        </div>


    )
}

export default Text
