import { Button } from '@/components/ui/button'
import React from 'react'

function GetInTouch() {
  return (
    <form className='flex flex-col lg:w-[60%] bg-white gap-8 rounded-lg p-8 ' >
        <div className='flex flex-col gap-4 :'>
            <h2 className='text-[32px] font-medium text-tertiary'>Get In Touch</h2>
            <p className='text-[16px] text-secondary font-semibold '>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
        </div>

        <div className='flex lg:flex-row xs:flex-col gap-4 w-full'>
            <input className='py-[14px] px-[20px] rounded-sm border-1 placeholder:text-gray-300 lg:w-[50%] xs:w-[100%] ' placeholder='Your Name' type="text" />
            <input className='py-[14px] px-[20px] rounded-sm border-0.5  border-1 placeholder:text-gray-300 lg:w-[50%] xs:w-[100%]' placeholder='Your Email' type="text" />

        </div>
        
        <input className='py-[14px] px-[20px] rounded-sm border-0.5  border-1 w-[100%] placeholder:text-gray-300' placeholder='Subject' type="text" />
        <textarea rows={6} className='py-[14px] px-[20px] rounded-sm border-0.5  border-1 w-[100%] placeholder:text-gray-300' name="" id="" placeholder='Message'>

        </textarea>
        <Button className="self-center"  variant="primary" type="submit" >Send Message</Button>
  
    </form>
  )
}

export default GetInTouch
