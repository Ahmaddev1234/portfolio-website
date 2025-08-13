"use client"
import { GraduationCap } from "lucide-react"
import EducationCard from "./EducationCard"
function AcademicExcellence() {

    const AcademicStats = [
        {
            name: "Master of Computer Science", Institution: "GC University", desc: `Advanced studies in computer science focusing on algorithms, software development, and emerging technologies`, duration: "2021-2025"
        },
        {
            name: "FSC Pre Engineering", Institution: "Govt Post Graduate College Faisalabad", desc: `Completed FSc Pre-Engineering, covering physics, chemistry, and mathematics as a foundation for engineering and technology studies.`, duration: "2019 - 2021"
        },
        {
            name: "Matric", Institution: "Government Higher Secondary School", desc: `Completed my matric, covering physics, chemistry, and mathematics as a foundation for engineering and technology studies.`, duration: "2017 - 2019"
        }
    ]


    return (
        <div className="flex flex-col lg:w-[50%] xs:w-[100%] gap-8">
            <div className="flex flex-col gap-6">
                <h2 className="text-[29px] text-tertiary font-semibold flex gap-2 items-center">
                    <GraduationCap />
                    Professional Journey
                </h2>
                <p className="text-[16px] text-secondary">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.
                </p>
            </div>

            <div className="w-[100%] flex gap-8 ">
                <div className="flex py-8">
                    <div className=" relative flex flex-col justify-between w-[2px] bg-primary items-center">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index}
                                className="w-4 h-4 border-3   border-white rounded-full bg-primary shadow-[0_0_0_4px_#DAE6F5]">

                            </div>
                        ))}



                    </div>
                </div>

                <div className="flex w-[90%] flex-col gap-8">
                    {AcademicStats.map((item) => (

                        <EducationCard name={item.name} Institution={item.Institution} duration={item.duration} desc={item.desc} />

                    ))}

                </div>

            </div>

        </div>
    )
}

export default AcademicExcellence
