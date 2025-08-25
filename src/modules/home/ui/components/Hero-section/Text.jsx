"use client"
import { Button } from "@/components/ui/button"
import TextAnimation from "./Text-Animation"
import CountUp from "react-countup";
import { Icons } from "@/constants/constants";
import Link from "next/link";
import { motion } from "framer-motion";
function Text() {

 const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};
const fadeInDiagonal= {
  hidden: { opacity: 0,x: -50, y: 200 },
  visible: { opacity: 1,x: 0, y: 0 },
}

  const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

  return (
    <div className='z-50 h-full md:w-[100%] lg:w-[50%] flex flex-col gap-[48px] mt-40 md:mt-50 md:px-24 px-12 font-quicksand'>
      <motion.div
      variants={fadeInLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease:"easeIn" }}
      
      className="flex flex-col gap-[24px]">
        <TextAnimation />
        <p className='text-[19px] text-black/30 md:text-left text-center'
        >
          I create digital experiences that inspire and engage. With a passion for clean design and innovative solutions, I transform ideas into beautiful, functional realities.
        </p>
      </motion.div>
      <motion.div
      variants={fadeInDiagonal}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, ease:"easeIn" }}
      
      className="flex gap-6 text-black/30 md:flex-row flex-col">
        <div className="flex flex-col ">
          <p className="text-[32px] text-primary font-bold text-center">
            <CountUp
            className="account-balance"
              start={0}
              end={150}
              duration={4}
              useEasing={true}
              separator=","
          /></p>
          <p className="text-sm text-center"> Projects Completed</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[32px] text-primary font-bold text-center">    
            <CountUp
              className="account-balance"
              start={0}
              end={8}
              duration={1}
              useEasing={true}
              separator=","
          /></p>
          <p className="text-sm text-center"> Years Experience</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[32px] text-primary font-bold text-center">
            <CountUp
              className="account-balance"
              start={0}
              end={98}
              duration={1}
              useEasing={true}
              separator=","
          />
          </p>
          <p className="text-sm text-center"> Happy Clients</p>
        </div>
      </motion.div>

      <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease:"easeIn" }}
      viewport={{ once: true, amount: 0.3 }}

      className="flex md:flex-row flex-col gap-8">
        <Button variant="primary" ><a href="#portfolio">View My Work</a></Button>
        <Button variant="outline" ><a href="#contactUs">Get In Touch</a></Button>
      </motion.div>

      <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease:"easeIn" }}
      viewport={{ once: true, amount: 0.3 }}
      
      className="flex gap-4 md:justify-start justify-center">
        {Icons.map((Icon)=>(
          <Link href={Icon.href} target="_blank" rel="noopener noreferrer" className="h-[45px] w-[45px] group rounded-full flex justify-center bg-white items-center hover:bg-primary hover:-translate-y-1 transition-all shadow-md ease-in">
          <Icon.Icon   className="group-hover:text-white text-[#333333]" size={20}/>
        </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default Text
