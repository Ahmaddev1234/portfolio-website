"use client"
import { GraduationCap } from "lucide-react"
import { AcademicStats } from '@/constants/constants'
import EducationCard from "./EducationCard"
import { motion } from "framer-motion"
function AcademicExcellence() {




    return (
        <motion.div
            initial={{ opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:w-[50%] xs:w-[100%] gap-8">
            <div className="flex flex-col gap-6">
                <h2 className="text-[29px] text-tertiary font-semibold flex gap-2 items-center">
                    <GraduationCap />
                    Academic Journey
                </h2>
                <p className="text-[16px] text-secondary">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.
                </p>
            </div>

            <div className="w-[100%] flex gap-8 ">
                <div className="flex py-8">
                    <div className=" relative flex flex-col justify-between w-[2px] bg-primary items-center">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <motion.div
                                initial={{ y: 200 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                viewport={{ once: true, amount: 0.5 }}

                                key={index}
                                className="w-4 h-4 border-3   border-white rounded-full bg-primary shadow-[0_0_0_4px_#DAE6F5]">

                            </motion.div>
                        ))}



                    </div>
                </div>

                <div className="flex w-[90%] flex-col gap-8">
                    {AcademicStats.map((item) => (

                        <EducationCard name={item.name} Institution={item.Institution} duration={item.duration} desc={item.desc} />

                    ))}

                </div>

            </div>

        </motion.div>
    )
}

export default AcademicExcellence
