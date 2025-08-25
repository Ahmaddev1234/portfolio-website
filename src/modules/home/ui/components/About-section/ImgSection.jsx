"use client"
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

  const fadeInLeft = {
  hidden: { opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 640 ? -20 : -200 },
  visible: { opacity: 1, x: 0 },
};

function ImgSection() {
  return (
    <motion.div
    variants={fadeInLeft}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration:0.5
    }}
    viewport={{ once: true, amount: 0.5 }}
    
    className='flex flex-col xs:w-[100%] md:w-[40%] gap-4 items-center justify-center md:p-8 xs:p-2'>
        <div className='border-4 border-primary rounded-full w-[270px] h-[270px] overflow-hidden'>
        <img src="/1728133827817.jpg" className="object-cover w-full" alt="" />
        </div>
        <p className={`text-5xl ${dancingScript.className}`}>Ahmad Hassan</p>
        <p className="text-[14px] text-center ">
            Building meaningful digital experiences through creative code.
        </p>
    </motion.div>
  )
}

export default ImgSection
