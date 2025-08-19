import React from 'react'
import { Star, Quote } from 'lucide-react'
function TetimonialCard({ name, role, rating, message, source }) {
    return (
        <div className='w-full relative px-6 py-10 flex-col h-auto gap-4 flex justify-left rounded-lg  bg-cover bg-center shadow-[0_0px_20px_rgba(173,194,210,0.2)] hover:-translate-y-[20px] duration-200 ease-in '>
            <div className='absolute top-[-20px] left-[20px]'>

                <Quote
                    size={40}
                    strokeWidth={0}
                    fill="currentColor"
                    className='text-[#cbdef2]' />

            </div>
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
        </div>
    )
}

export default TetimonialCard
