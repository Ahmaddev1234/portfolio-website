"use client"
import { motion } from "framer-motion";

function FloatingCard({icon:Icon,name,location,animate}) {
  return (
    <motion.div
    style={{ 
        willChange: "transform",
        position: "absolute",
        ...location,
    
    }}
    animate={{
        ...animate
    }}
    
    transition={{ 
        duration: 10 ,
        repeat: Infinity,
        ease: "easeInOut"
    }}

    className={`absolute left-[${location}] flex xs:w-[168px] md:w-[175px] h-[66px] px-[15px] py-[20px] md:text-base text-[14px] gap-2 bg-white text-[#314862] rounded-lg font-bold`}>
        <Icon className="text-primary"/>
        <span>{name}</span>
    </motion.div>
  )
}

export default FloatingCard
