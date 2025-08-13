import ExperienceCard from "./ExperienceCard"
import { MessageSquareIcon } from "lucide-react"
function ProfessionalJourney() {

    const ProfessionalStats = [
        {
            name: "Frontend Engineer", company: "Sapient Compiles", desc: `Built responsive, interactive UIs with React.js, Tailwind CSS, and Framer Motion, delivering smooth animations and optimized performance.
            `, responsibilities: ["Build responsive UIs with React and Tailwind CSS.", "Add smooth animations using Framer Motion.", "Integerate APIs for dynamic data"], duration: "2025 - Present"
        },
        {
            name: "MernStack Intern", company: "Sapient Compiles", desc: `Developed full-stack web features using MongoDB, Express, React, and Node.js, contributing to both frontend UI and backend APIs.`, duration: "2025 - 2025"
        }
    ]

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
