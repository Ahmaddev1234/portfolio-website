import React from 'react'
import { X } from 'lucide-react'
import PreviewCourousal from '@/modules/Porfolio-details/ui/components/PreviewCourousal'
function Preview({ Project, setIsOpen }) {
  return (
    <div className='fixed flex inset-0 justify-center items-center left-0  z-50 md:top-0  w-screen h-screen lg:bg-black/80 xs:bg-black'>
    < X size={32} className='absolute top-8 cursor-pointer right-8 text-white' onClick={()=>{setIsOpen(false)}}/>
    <div className=' lg:w-[60%] xs:w-[100%] max-h-[100%]'>
      <div className='lg:h-[80%]'>
        <PreviewCourousal Project={Project}/>
      </div>
        <div className='flex flex-col lg:h-[20%] xs:text-white md:text-black justify-center xs:bg-transparent md:bg-white gap-4  px-8 py-8'>
        <h1 className='text-black text-[16px] font-semibold'>{Project.name}</h1>
        <p className='text-secondary text-[14px] font-normal'>{Project.description}</p>
        </div>

    </div>
  
</div>
  )
}

export default Preview


