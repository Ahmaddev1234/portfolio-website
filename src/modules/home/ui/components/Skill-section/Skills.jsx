"use client"
import { motion } from "framer-motion";
import { SkillCardItems,SkillStats,SkillTags } from "@/constants/constants"
import SkillCard from "./SkillCard"
function Skills() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      };
      
        const fadeInRight = {
        hidden: { opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 640 ? 20 : 100 },
        visible: { opacity: 1, x: 0 },
      };


    return (
        <div className="flex xs:flex-col lg:flex-row gap-6 md:px-32 xs:px-4 py-12">
            <div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-6 lg:w-[68%] xs:w-[100%]">
                {SkillCardItems.map((item) => (
                    <SkillCard Icon={item.Icon} skill={item.skill} technology={item.technology} />
                ))}
            </div>
            <div className="flex flex-col lg:w-[30%] xs:w-[100%] px-6 gap-6 py-8  shadow-[0_4px_12px_rgba(59,130,246,0.3)] rounded-xl">
                <motion.h2
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration:0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className="text-[24px] text-primary">
                    Professional Expertise
                </motion.h2>
                <motion.p
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration:0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className="text-[16px] text-secondary">
                    Professional expertise adds value by blending knowledge with practical skills. It ensures efficiency, nurtures trust, drives innovation, and delivers lasting impact across projects.
                </motion.p>

                <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration:0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className="flex flex-col gap-8 ">
                    {SkillStats.map((item)=>(

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
                </motion.div>
                <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration:0.5
                }}
                viewport={{ once: true, amount: 1 }}
                className="flex flex-col gap-4">
                    <h2 className="text-[18px] text-tertiary">Certifications</h2>
                    <div className="flex flex-wrap gap-2">
                        {SkillTags.map((tag)=>(
                            <button className="bg-primary px-[16px] py-[8px] text-white font-bold text-[12px] rounded-full">{tag}
                            </button>
                        ))}
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default Skills
