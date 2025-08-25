"use client"
import { ContactDetails } from '@/constants/constants'
import { motion } from 'framer-motion'
function ContactInfo() {
  return (
    <motion.div
    initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.3}}
    className='flex flex-col lg:w-[40%] xs:w-[100%] bg-primary gap-12 rounded-lg p-8 ' >
        <div className='flex flex-col  gap-4'>
            <h2 className='text-[32px] font-medium text-white'>Contact Info</h2>
            <p className='text-[16px] text-gray-300 font-semibold '>Access my phone, email, and location details easily to reach me for projects or inquiries.</p>
        </div>
        {ContactDetails.map((item)=>(
            <div className='flex  gap-4 '>
            <div className='flex flex- items-center justify-center bg-[#2b73cc] rounded-full self-start p-4'>
                <item.Icon color='white' size={28}/>
            </div>
            <div className='flex flex-col gap-1 flex-wrap'>
                <h1 className='text-[20px] text-white font-bold'>{item.title}</h1>
                <p className='text-[16px] text-gray-300 font-semibold flex flex-wrap'>{item.desc}</p>
            </div>
        </div>
        ))}
        

      
    </motion.div>
  )
}

export default ContactInfo
