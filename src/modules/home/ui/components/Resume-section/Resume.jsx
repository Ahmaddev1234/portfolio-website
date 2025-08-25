import AcademicExcellence from "./AcademicExcellence"
import ProfessionalJourney from "./ProfessionalJourney"

function Resume() {
  return (
    <div className="flex flex-col md:px-32 xs:px-4 py-12 gap-14"
    id="resume"
    >
      <div className=''>
        <div className='w-[20%] flex gap-2 items-center'>
            <h2 className='text-[36px] font-semibold text-tertiary font-quicksand'>Resume </h2>
            <hr className='w-full font-extrabold border-1 border-[#13447f] text-[#13447f]' />
        </div>
        <p className='text-[16px] text-secondary font-quicksand'>Explore my education, career experience, and achievements that reflect growth and expertise.</p>
        </div>
      <div className="flex lg:flex-row xs:flex-col gap-18">
        <ProfessionalJourney/>
        <AcademicExcellence/>
      </div>
    </div>
  )
}

export default Resume
