import React from 'react'
import { Star, Quote } from 'lucide-react'
function FinalRatingCard() {
    return (
        <div className='w-auto relative p-[40px] flex-col h-auto gap-4 flex justify-center items-center rounded-xl  bg-cover bg-center shadow-[0_0px_20px_rgba(173,194,210,0.2)]  '>
            <h2 className='text-[48px] text-tertiary leading-none font-bold font-roboto'>4.8</h2>
            <p className='text-lg text-[#ffd900] font-bold flex gap-2'>
                {Array.from({ length: 5 }).map((_, i) => (
                    <span > <Star
                        size={28}
                        strokeWidth={0}
                        fill="currentColor" /></span>
                ))}

            </p>
            <p className=' text-[15px] text-black '>Based on 230+ reviews</p>
            <p className='text-primary font-semibold flex flex-wrap justify-center w-full gap-4'>
                <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
                    Goodreads
                </div>
                <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
                    barnes and noble
                </div>
                <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
                    Amazon
                </div>
                </p>
        </div>
    )
}

export default FinalRatingCard


