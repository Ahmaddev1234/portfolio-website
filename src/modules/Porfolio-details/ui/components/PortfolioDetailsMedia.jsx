import React from 'react'
import Courousal from './Courousal'

function PortfolioDetailsMedia({ Project }) {
  // console.log(Project);

  return (
    <div className='lg:w-[50%] xs:w-[100%]  px-4 flex flex-col gap-6'>
      <Courousal Project={Project} />
      <div className='flex gap-3 '>
        {Project.images.map((imgSrc) => (
          <div className='flex rounded-md overflow-hidden shadow-[0_4px_6px_rgba(40,58,78,0.2)]'>
            <img className='h-[80px] w-full object-cover' src={imgSrc} alt="" />
          </div>
        ))}
      </div>
      <div className='flex w-full flex-wrap gap-2 '>
        {Project.technologiesUsed.map((technology) => (
          <div className="bg-[#f0f6fc] max-w-[50%] flex  px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
            {technology}
          </div>
        ))}

      </div>
    </div>
  )
}

export default PortfolioDetailsMedia
