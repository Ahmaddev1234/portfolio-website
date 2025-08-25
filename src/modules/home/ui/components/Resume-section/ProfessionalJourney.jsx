"use client"
import { ProfessionalStats } from "@/constants/constants"
import ExperienceCard from "./ExperienceCard"
import { MessageSquareIcon } from "lucide-react"
function ProfessionalJourney() {



    return (
        <div className="flex flex-col lg:w-[50%] xs:w-[100%] gap-2">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-[29px] text-tertiary font-semibold flex gap-2 items-center">
                        <MessageSquareIcon />
                         Professional Journey
                    </h2>
                    <p className="text-[16px] text-secondary">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {ProfessionalStats.map((item) => (
                        <ExperienceCard name={item.name} company={item.company} desc={item.desc} duration={item.duration} responsibilities={item.responsibilities ?? []} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProfessionalJourney
