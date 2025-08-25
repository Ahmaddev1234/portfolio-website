"use client"
import { services } from "@/constants/constants"
import ServiceCard from "./ServiceCard"
import { motion } from "framer-motion"
function Services() {



  return (
    <div
    id="services"
    className='flex flex-col md:px-32 xs:px-4 py-12 gap-12'>
    <div className=''>
      <div className='w-[20%] flex gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Services </h2>
          <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
      </div>
      <p className='text-[16px] text-secondary'>Offering design, development, and creative solutions tailored to your unique project needs.</p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6 '>
        {services.map((service)=>(
            <ServiceCard Icon={service.Icon} name={service.name} desc={service.desc} />

        ))}
      </div>
  </div>
  )
}

export default Services
