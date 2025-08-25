"use client"
import Filters from "./Portfolio-filters/Filters"
import { motion } from "framer-motion"
function Portfolio() {
  return (
    <motion.div
    initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.1}}
    id="portfolio" className="flex flex-col md:px-6 xs:px-4 py-12 gap-14">
    <div className='lg:px-26 px-0'>
      <div className='w-[20%] flex gap-2 items-center'>
          <h2 className='text-[36px] font-semibold text-tertiary font-quicksand'>Portfolio </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
      </div>
      <p className='text-[16px] text-secondary font-quicksand'>Showcasing my creative work and completed projects that highlight skills and innovation.</p>
      </div>
    <div className="flex lg:flex-row xs:flex-col gap-18">
        <Filters/>
    </div>
  </motion.div>
  )
}

export default Portfolio
