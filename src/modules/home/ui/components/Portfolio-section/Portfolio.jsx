"use client"
import Filters from "./Portfolio-filters/Filters"
function Portfolio() {
  return (
    <div className="flex flex-col md:px-6 xs:px-4 py-12 gap-14">
    <div className='lg:px-26 px-0'>
      <div className='w-[20%] flex gap-2 items-center'>
          <h2 className='text-[36px] font-semibold text-tertiary font-quicksand'>Portfolio </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
      </div>
      <p className='text-[16px] text-secondary font-quicksand'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
    <div className="flex lg:flex-row xs:flex-col gap-18">
        <Filters/>
    </div>
  </div>
  )
}

export default Portfolio
