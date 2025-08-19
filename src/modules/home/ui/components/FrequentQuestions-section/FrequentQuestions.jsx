import FAQsAccordion from "./FAQsAccordion"
import { FAQs } from "@/constants/constants"

function FrequentQuestions() {
  return (
    <div className='flex flex-col md:px-32 xs:px-4 py-12 gap-16'>
      <div className='flex flex-col md:gap-0 xs:gap-2'>
        <div className='w-[100%] flex flex-wrap gap-2 items-center font-quicksand'>
          <h2 className='text-[36px] font-semibold text-tertiary'>Frequently asked questions </h2>
          <hr className='w-[30%] font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="flex flex-col gap-4 w-full ">
        {FAQs.map((item)=>(

            <FAQsAccordion question={item.question} answer={item.answer}/>

        ))}

      </div>
      
    </div>
  )
}

export default FrequentQuestions


