import React from 'react'

function ImgSection() {
  return (
    <div className='relative flex md:w-[50%]  md:mt-50 justify-center'>
      <div className='md:w-[500px] md:h-[500px] md:p-0 pl-4 md:pl-0 w-[346px] h-[346px] rounded-3xl bg-primary/90'>

      </div>
      <div className="absolute md:top-[-18px] top-[-14px]  md:right-28 right-14 md:w-[500px] md:h-[500px] w-[346px] h-[346px] rounded-3xl bg-[url('/profile-img3.jpg')] bg-cover bg-center">

        </div>
    </div>
  )
}

export default ImgSection
