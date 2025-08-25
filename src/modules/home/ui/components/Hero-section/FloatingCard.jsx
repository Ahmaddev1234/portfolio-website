"use client"
import { motion } from "framer-motion";

function FloatingCard({icon:Icon,name,location,animate}) {

  const myVariant={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
    }

  }
  return (
    <motion.div
    style={{ 
        willChange: "transform",
        position: "absolute",
        ...location,
    
    }}
    variants={myVariant}
    initial="hidden"
    whileInView="visible"
    animate={{
        ...animate
    }}
    
    transition={{ 
        opacity:{duration:2},
        duration: 10 ,
        repeat: Infinity,
        ease: "easeInOut"
    }}
    viewport={{ once: true, amount: 1 }}

    className={`absolute left-[${location}] flex xs:w-[168px] md:w-[175px] h-[66px] px-[15px] py-[20px] md:text-base text-[14px] gap-2 bg-primary text-white rounded-lg font-bold`}>
        <Icon className="text-white"/>
        <span>{name}</span>
    </motion.div>
  )
}

export default FloatingCard
