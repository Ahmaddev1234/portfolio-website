"use client"
import { delay, motion } from "framer-motion"
function SkillCard({ Icon, skill, technology }) {
    return (
        <motion.div
        initial={{ rotateY: -90 ,opacity:0}}
        whileInView={{ rotateY:0,opacity:1 }}
        transition={{ duration: 0.5 ,ease:"easeInOut"}}
        viewport={{once:true,amount:1}}
        style={{ transformStyle: "preserve-3d" }}
        className="flex flex-col gap-6 p-[30px] bg-gradient-to-br from-white to-[#f4f9ff] border-primary border-t-4 rounded-2xl hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all ease-in-out duration-200">
            <div className="flex gap-4 items-center">
                <div className="bg-[#f0f6fc] px-3 py-2 rounded-lg">
                    <Icon className="text-primary" size={32}/>
                </div>
                <h2 className="text-[20px] font-semibold text-tertiary">{skill}</h2>
            </div>
            <div className="flex flex-col gap-4">
                {technology.map((technology) => (

                    <div className="flex flex-col gap-2 ">
                        <div
                        className="flex justify-between">
                            <h2 className="text-[15px] text-tertiary font-semibold">{technology.name}</h2>
                            <p className="text-[14px] font-semibold">{technology.percentage}%</p>
                        </div>
                        {/* <progress value={technology.percentage} max="100"></progress> */}
                        <div class=" bg-blue-200 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                            initial={{ width:0}}
                            whileInView={{width:`${technology.percentage}%`}}
                            transition={{ duration: 0.3 ,ease:"easeInOut"}}
                            viewport={{once:true,amount:1}}
                                class="bg-primary h-full rounded-full transition-all duration-500"
                                style={{ width: `${technology.percentage}%` }}>
                            </motion.div>
                        </div>


                    </div>
                ))}
            </div>
        </motion.div>
    )


}

export default SkillCard
