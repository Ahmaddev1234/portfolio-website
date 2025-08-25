"use client"
import FAQsAccordion from "./FAQsAccordion"
import { FAQs } from "@/constants/constants"
import { motion } from "framer-motion"
function FrequentQuestions() {
  return (
    <motion.div
    initial={{opacity:0,y:80}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,ease:"easeIn"}}
    viewport={{once:true,amount:0.5}}

    className='flex flex-col md:px-32 xs:px-4 py-12 gap-16'>
      <div className='flex flex-col md:gap-0 xs:gap-2'>
        <div className='w-[100%] flex flex-wrap gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Frequently asked questions </h2>
          <hr className='w-[30%] font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary'>Find clear answers to the most common questions about my services, process, and approach</p>
      </div>
      <div className="flex flex-col gap-4 w-full ">
        {FAQs.map((item)=>(

            <FAQsAccordion question={item.question} answer={item.answer}/>

        ))}

      </div>
      
    </motion.div>
  )
}

export default FrequentQuestions


