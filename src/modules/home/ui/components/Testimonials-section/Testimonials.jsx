"use client"
import { TESTIMONIALS } from "@/constants/constants"
import TetimonialCard from "./TetimonialCard"
import Courousal from "./Courousal/Courousal"
import FinalRatingCard from "./FinalRatingCard"
import { motion } from "framer-motion"
function Testimonials() {
  return (
    <motion.div
    initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.1}}

    className='flex flex-col md:px-32 xs:px-4 py-12 gap-16'>
      <div className=''>
        <div className='w-[20%] flex gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Testimonials </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary'>Read reviews and feedback from clients who trust my work and value my professional skills.</p>
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 gap-6 '>
        {TESTIMONIALS.map((item) => (
          <TetimonialCard name={item.name} role={item.role} message={item.message} rating={item.rating} source={item.source} />
        ))}

      </div>
      <div className="w-full h-auto">
        <Courousal />
      </div>
      <div className="w-full flex justify-center">
        <FinalRatingCard />
      </div>
    </motion.div>
  )
}

export default Testimonials
