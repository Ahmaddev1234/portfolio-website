"use client"
import React from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
function CourousalCard({ name, role, rating, message, source }) {
    return (
        <motion.div
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.5}}

        className='w-full relative px-6 py-6 flex-col border border-t-4 border-t-primary overflow-hidden  gap-4 flex justify-left rounded-lg  bg-cover bg-center shadow-[0_0px_8px_rgba(173,194,210,0.2)]  '>
            <p className='text-lg text-[#ffd900] font-bold flex gap-2'>
                {Array.from({ length: rating }).map((_, i) => (
                    <span > <Star
                        size={20}
                        strokeWidth={0}
                        fill="currentColor" /></span>
                ))}

            </p>
            <p className=' text-[15px] text-black italic'>{message}</p>
            <p className='text-primary font-semibold'>{role}</p>
            <div className='flex gap-2 items-center '>
                <div className='flex h-12 w-12 border-4 border-secondary  rounded-full overflow-hidden'>
                    <img className='object-cover w-full ' src="/profile-img4.png" alt="" />
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[16px] text-primary font-bold'>{name}</h3>
                    <h4 className='text-[14px] text-secondary'>{source}</h4>
                </div>
            </div>
        </motion.div>
    )
}

export default CourousalCard
