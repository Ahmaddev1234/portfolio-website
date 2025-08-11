import React from 'react'

function SkillCard({icon:Icon,name,Desc}) {
  return (
    <div className='flex  flex-col justify-center items-center border-1 border-primary px-6 py-6 bg-[#f0f6fc] gap-2 rounded-xl hover:drop-shadow-[0_4px_6px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition-all ease-in-out duration-200'>
      <div className='bg-primary rounded-full p-4'>
         <Icon className="text-white"/>
      </div>
      <h1 className='text-[18px] text-tertiary'>
        {name}
      </h1>
        <p className='text-[14px] text-secondary'>
            {Desc}
        </p>
    </div>
  )
}

export default SkillCard
