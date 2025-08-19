"use client"
import { Icons } from '@/constants/constants'
function Footer() {
    return (
        <div className='flex flex-col w-full justify-center items-center bg-primary gap-4 p-12'>
            <p className='text-gray-300'>© Copyright <span className='text-white'>Style</span>  All Rights Reserved</p>
            <div className="flex gap-4">
            {Icons.map((Icons)=>(
                <a href="/" className="cursor-pointer">
                <div className="h-10 w-10 group hover:border-white rounded-full flex justify-center ease duration-100 cursor-pointer items-center border-1 border-gray-300">
                    <Icons.Icon size={16} className='text-gray-300 group-hover:text-white ease duration-100 cursor-pointer' />
                </div>
            </a>
            ))}  
            </div>
            <p className='text-[13px] text-white'>Designed by <span className='text-gray-300 hover:text-white ease duration-100 cursor-pointer'>Ahmad Hassan</span> </p>
        </div>
    )
}

export default Footer
