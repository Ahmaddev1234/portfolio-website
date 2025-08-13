"use client"
import { Code, Database, Cookie, Cloud, Trophy,  Presentation, Users } from "lucide-react"
import SkillCard from "./SkillCard"
import { Button } from "@/components/ui/button"
function Skills() {

    const CardItems = [
        { Icon: Code, skill: "Frontend Development", technology: [{ name: "HTML/CSS", percentage: "95" }, { name: "Javascript", percentage: "90" }, { name: "Reactjs/Nextjs", percentage: "85" }] },
        { Icon: Database, skill: "Backend Development", technology: [{ name: "javascript", percentage: "90" }, { name: "Nodejs", percentage: "88" }, { name: "MongoDB", percentage: "70" }] },
        { Icon: Cookie, skill: "Design & Tools", technology: [{ name: "Figma", percentage: "80" }, { name: "Illustrator", percentage: "75" }, { name: "Photoshop", percentage: "83" }] },
        { Icon: Cloud, skill: "Cloud & DevOps", technology: [{ name: "Vercel", percentage: "90" }, { name: "Git", percentage: "89" }, { name: "Github", percentage: "95" }] }
    ]

    const Stats=[
        {Icon:Trophy, title:"Years Experience", stats:"5"},
        {Icon:Presentation, title:"Projects Completed", stats:"150"},
        {Icon:Users, title:"Happy Clients", stats:"100"},
    ]

    const Tags=["Ui/Ux Design","Reactjs Developer","Nextjs Expert","Frontend Expert"]

    return (
        <div className="flex xs:flex-col lg:flex-row gap-6 md:px-32 xs:px-4 py-12">
            <div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-6 lg:w-[68%] xs:w-[100%]">
                {CardItems.map((item) => (
                    <SkillCard Icon={item.Icon} skill={item.skill} technology={item.technology} />
                ))}
            </div>
            <div className="flex flex-col lg:w-[30%] xs:w-[100%] px-6 gap-6 py-8  shadow-[0_4px_12px_rgba(59,130,246,0.3)] rounded-xl">
                <h2 className="text-[24px] text-primary">
                    Professional Expertise
                </h2>
                <p className="text-[16px] text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

                <div className="flex flex-col gap-8 ">
                    {Stats.map((item)=>(

                        <div className="flex gap-2 items-center">
                            <div className="bg-primary rounded-full h-12 w-12 flex flex-col items-center justify-center text-center">
                                <item.Icon className="text-white" size={24}/>
                            </div>
                            <div className="flex flex-col ">
                                <p className="text-[24px] text-tertiary font-bold m-0"> {item.stats}+</p>
                                <span className="text-[14px] leading-none">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[18px] text-tertiary">Certifications</h2>
                    <div className="flex flex-wrap gap-2">
                        {Tags.map((tag)=>(
                            <button className="bg-primary px-[16px] py-[8px] text-white font-bold text-[12px] rounded-full">{tag}
                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills
