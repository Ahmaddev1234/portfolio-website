import React from 'react'
import {  X } from 'lucide-react'
import PreviewCourousal from './PreviewCourousal'
function Preview({Project,setIsOpen, clickedImgSrc}) {
  return (
    <div className='fixed flex inset-0 justify-center items-center left-0  z-50 md:top-0  w-screen h-screen lg:bg-black/80 xs:bg-black'>
        < X size={32} className='absolute top-8 cursor-pointer right-8 text-white' onClick={()=>{setIsOpen(false)}}/>
        <div className='flex flex-col lg:w-[60%] xs:w-[100%] max-h-[90%]'>
            <PreviewCourousal Project={Project} clickedImgSrc={clickedImgSrc}/>
            <div className='flex flex-col h-[20%] xs:text-white md:text-black justify-center xs:bg-transparent md:bg-white gap-4  px-8 py-8'>
                Gallery Image
            </div>

        </div>
      
    </div>
  )
}

export default Preview
