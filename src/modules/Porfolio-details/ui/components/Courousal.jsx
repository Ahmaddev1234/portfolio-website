import React from 'react'
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Courousal({Project}) {
  console.log(Project);
  
  return (
    <Carousel
    plugins={[
      Autoplay({
        delay:2000,
      })
    ]}
    opts={{
      align:"start",
      loop:"true"
    }}
    className="rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(40,58,78,0.4)]">
  <CarouselContent>
    {Project.images.map((img)=>(

    <CarouselItem><img className='w-full cover' src={img} alt="" /></CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="bg-white text-2xl w-12 h-12 border-white" />
  <CarouselNext  className="bg-white text-2xl w-12 h-12 border-white" />
</Carousel>
  )
}

export default Courousal
