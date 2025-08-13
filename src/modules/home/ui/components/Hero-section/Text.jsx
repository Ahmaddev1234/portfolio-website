"use client"
import { Button } from "@/components/ui/button"
import TextAnimation from "./Text-Animation"
import CountUp from "react-countup";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
function Text() {
  return (
    <div className='z-50 h-full md:w-[100%] lg:w-[50%] flex flex-col gap-[48px] mt-40 md:mt-50 md:px-24 px-12 font-quicksand'>
      <div className="flex flex-col gap-[24px]">
        <TextAnimation />
        <p className='text-[19px] text-black/30 md:text-left text-center'>
          I create digital experiences that inspire and engage. With a passion for clean design and innovative solutions, I transform ideas into beautiful, functional realities.
        </p>
      </div>
      <div className="flex gap-6 text-black/30 md:flex-row flex-col">
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
      </div>

      <div className="flex md:flex-row flex-col gap-8">
        <Button variant="primary">View My Work</Button>
        <Button variant="outline" >Get In Touch</Button>
      </div>

      <div className="flex gap-4 md:justify-start justify-center">
        <a href="/" className="h-[45px] w-[45px] group rounded-full flex justify-center bg-white items-center hover:bg-primary hover:-translate-y-1 transition-all shadow-md ease-in">
          <Twitter   className="group-hover:text-white text-[#333333]" size={20}/>
        </a>
        <a href="/" className="h-[45px] w-[45px] group  rounded-full flex justify-center bg-white items-center hover:bg-primary hover:-translate-y-1 transition-all shadow-md ease-in">
          <Linkedin  className="group-hover:text-white text-[#333333]" size={20}/>
        </a>
        <a href="/" className="h-[45px] w-[45px] group rounded-full flex justify-center bg-white items-center hover:bg-primary hover:-translate-y-1 transition-all shadow-md ease-in">
          <Github className="group-hover:text-white text-[#333333]" size={20}/>
        </a>
        <a href="/" className="h-[45px] w-[45px] group rounded-full flex justify-center bg-white items-center hover:bg-primary hover:-translate-y-1 transition-all shadow-md ease-in">
          <Instagram className="group-hover:text-white text-[#333333]" size={20}/>
        </a>
      </div>
    </div>
  )
}

export default Text
