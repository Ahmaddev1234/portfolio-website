"use client"
import { MoveRight } from "lucide-react"
import { motion } from "framer-motion"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

const MotionCard = motion(Card)

function ServiceCard({Icon,name,desc}) {

    const [hovered,setHovered]=useState(false);
    return (
        <motion.div
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:"easeIn"}}
        viewport={{once:true,amount:0.5}}
        >
            <Card className="relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
                <motion.div
                style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    width:"3px",
                    backgroundColor:"#1D4ED8"
                }}
                animate={{
                    height: hovered?"100%":"0%",
                }}
                transition={{
                    duration:0.3,
                    ease: "easeInOut"
                }}
                
                >

                </motion.div>
                <CardHeader>
                    <CardTitle ><Icon className="text-primary font-medium" size={40}/></CardTitle>
                    <CardTitle className="text-tertiary text-[24px] font-quicksand mt-5">{name}</CardTitle>
                    <CardDescription className="text-[16px] text-secondary mt-2">{desc}</CardDescription>
                    <CardContent className="text-[16px] text-primary flex gap-4 mt-4">Learn more <span><MoveRight className="text-primary"/></span></CardContent>
                </CardHeader>
            </Card>
        </motion.div>
    )
}

export default ServiceCard
