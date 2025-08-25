"use client"
import { CheckIcon } from "lucide-react"
import { motion } from "framer-motion"
function ExperienceCard({ name, company, desc, responsibilities,duration }) {
    return (
        <motion.div
        initial={{opacity:0,x: typeof window !== "undefined" && window.innerWidth < 640 ? -20 : -100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true}}
        className="flex flex-col gap-3 border-1 border-secondary border-l-5 border-l-primary rounded-xl p-[28px] hover:shadow-[0_4px_28px_rgba(40,58,78,0.4)] hover:-translate-y-2 transition-all ease-in-out duration-200">
            <div className="flex md:flex-row xs:flex-col xs:gap-2 md:gap-0 md:items-center md:justify-between">
                <div className="flex flex-col gap-0">
                    <h1 className="text-[20px] text-tertiary font-bold">{name}</h1>
                    <h2 className="text-[16px]  text-primary">{company}</h2>
                </div>
                <div className="bg-[#f0f6fc] max-w-[50%] flex px-[16px] py-[8px]   items-center justify-center text-primary font-semibold text-[14px] rounded-full ">
                    {duration}
                </div>
            </div>

            <p className="text-secondary text-[16px] font-medium ">
                {desc}
            </p>
            <div className="flex flex-col gap-1">
                {responsibilities.map((responsibility, index) => (

                    <p className="text-[14px] text-secondary font-medium flex items-center gap-2">
                        <CheckIcon size={16} className="text-secondary" /> <span>  {responsibility}</span>
                    </p>

                ))}


            </div>
        </motion.div>
    )
}

export default ExperienceCard
