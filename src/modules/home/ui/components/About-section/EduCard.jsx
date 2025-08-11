import React from 'react'

function EduCard({year,desc}) {
  return (
    <div className='flex gap-4 px-2 py-4 border-l-3 hover:bg-[#f0f6fc] rounded-r-lg border-primary'>
      <h1 className=' text-primary font-semibold text-[18px]'>{year}</h1>
      <p className='text-secondary'>{desc}</p>
    </div>
  )
}

export default EduCard
