"use client"
import { ReactTyped } from "react-typed"

function TextAnimation() {
  return (
    <div>
      <h1 className='md:text-[50px] text-[35px] md:text-left text-center text-primary font-bold'>
        <span className="text-[#13447f]">Creative </span> 

        <ReactTyped
          strings={[
            "Developer",
            "Designer",
            "Artist",
          ]}
          typeSpeed={80}
          backSpeed={80}
          loop
        >
        </ReactTyped>

      </h1>
    </div>
  )
}

export default TextAnimation
