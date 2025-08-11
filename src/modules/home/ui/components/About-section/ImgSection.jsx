
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

function ImgSection() {
  return (
    <div className='flex flex-col xs:w-[100%] md:w-[40%] gap-4 items-center justify-center md:p-8 xs:p-2'>
        <div className='border-4 border-primary rounded-full w-[270px] h-[270px] overflow-hidden'>
        <img src="/profile-img3.webp" className="object-cover w-full" alt="" />
        </div>
        <p className={`text-5xl ${dancingScript.className}`}>Ahmad Hassan</p>
        <p className="text-[14px] text-center ">
            Building meaningful digital experiences through creative code.
        </p>
    </div>
  )
}

export default ImgSection
