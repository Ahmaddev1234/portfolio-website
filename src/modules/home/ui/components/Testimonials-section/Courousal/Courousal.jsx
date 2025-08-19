"use client"
import React from 'react'
import CourousalCard from './CourousalCard'
import { TESTIMONIALS2 } from '@/constants/constants'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Courousal() {
    return (
        <Carousel
        plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        opts={{
            loop:true
        }}
        >
            <CarouselContent>
             {TESTIMONIALS2.map((item)=>(
                <CarouselItem className="md:basis-1/2 xs:basis-1/1 lg:basis-1/3 pl-6">
                <CourousalCard name={item.name} role={item.role} message={item.message}  rating={item.rating} source={item.source}/>
                </CarouselItem>
             ))} 
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Courousal
