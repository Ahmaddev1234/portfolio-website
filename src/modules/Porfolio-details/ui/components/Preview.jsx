import React from 'react'
import {  X } from 'lucide-react'
function Preview({Project,setIsOpen}) {
  return (
    <div className='fixed flex inset-0 justify-center items-center left-0  z-50 top-0  w-screen h-screen bg-black/80'>
        < X size={32} className='absolute top-8 cursor-pointer right-8 text-white' onClick={()=>{setIsOpen(false)}}/>
        <div className='flex flex-col w-[60%] h-[100%]'>
            <div className='h-[80%]'>

                <img className='object-cover w-full h-full' src={`${Project.images[0]}`} alt="" />
            </div>
            <div className='flex flex-col h-[20%] bg-white gap-4  px-8 py-8'>
                <h1 className='text-black text-[16px] font-semibold'>{Project.name}</h1>
                <p className='text-secondary text-[14px] font-normal'>{Project.description}</p>
            </div>


        </div>
      
    </div>
  )
}

export default Preview
