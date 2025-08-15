"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {  MoveDiagonal, MoveRight } from 'lucide-react'
import Preview from './Preview'
function ProjectCard({ Project }) {
    const [hovered, setHovered] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const handlePreview=()=>{
        setIsOpen(true)
    }
    return (
        <motion.div className='w-full h-56 flex items-center justify-left rounded-lg overflow-hidden bg-cover bg-center shadow-[0_0px_20px_rgba(173,194,210,0.2)]'
            onMouseEnter={(() => { setHovered(true) })}
            onMouseLeave={(() => { setHovered(false) })}
            style={{
                backgroundImage: `url(${Project.images[0]})`,
                position: "relative",

            }}

            initial={{ opacity: 0, y: 200 }}
            whileInView={{
                opacity:1,
                y:0
            }}

            transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
        >
            {isOpen&&
            
                <Preview Project={Project} setIsOpen={setIsOpen}/>
            }
            <motion.div
                animate={{
                    opacity: hovered ? 1 : 0
                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                style={{
                    display: hovered ? "block" : "none"
                }}
                class="absolute inset-0 bg-gradient-to-t from-gray-900/100 to-white/20">

            </motion.div>
            <motion.div
            className='flex flex-col gap-6 p-8 justify-left '
                style={{
                    position: "absolute",

                }}

                animate={{
                    y: hovered ? 0 : 80,
                    opacity: hovered ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    staggerChildren: 0.15
                }}
            >

                <h3 className='text-[16px] text-primary'>{Project.name}</h3>
                <h2 className='text-[24px] text-white'>{Project.name}</h2>
                <div className='flex gap-4'>
                <div className='bg-white w-12 h-12 group rounded-xl flex items-center cursor-pointer justify-center hover:bg-primary hover:text-white'>
                    <MoveRight className='text-primary  group-hover:text-white' strokeWidth={1}/>
                </div>
                <div
                onClick={handlePreview}
                className='bg-white w-12 h-12 rounded-xl group cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white'>
                    <MoveDiagonal className='text-primary group-hover:text-white' strokeWidth={1}/>
                </div>
                </div>
                


            </motion.div>

        </motion.div>
    )
}

export default ProjectCard
