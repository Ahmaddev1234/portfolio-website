import { motion } from "framer-motion"
function EducationCard({ name, Institution, desc,duration }) {
    return (
        <motion.div
        initial={{ y:200}}
        whileInView={{y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true, amount:0.3}}
        className="flex flex-col gap-3 border-1 border-secondary   rounded-xl p-[28px] hover:shadow-[0_4px_28px_rgba(40,58,78,0.4)] hover:-translate-y-2 transition-all ease-in-out duration-200">

            <div className="flex md:flex-row xs:flex-col xs:gap-2 md:gap-0 md:justify-between md:items-center">
                <div className="flex flex-col gap-0">
                    <h1 className="text-[17px] text-tertiary font-bold">{name}</h1>
                    <h2 className="text-[16px]  text-primary">{Institution}</h2>
                </div>
                <div className="bg-primary flex px-[16px] py-[8px] max-w-[50%]  items-center justify-center text-white leading-none font-semibold text-[12px] rounded-full ">
                    {duration}
                </div>
            </div>

            <p className="text-secondary text-[16px] font-medium ">
                {desc}
            </p>
        </motion.div>
    )
}

export default EducationCard
