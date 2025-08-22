import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function PreviewCourousal({ Project, clickedImgSrc }) {
  const startIndex = clickedImgSrc
  ? Project.images.findIndex((img) => img === clickedImgSrc)
  : 0;


  return (
    <Carousel
      opts={{
        align: "start",
        
        startIndex: (startIndex !== -1 ? startIndex : null) ?? 0

      }}
      className=" h-[100%]"
    >
      <CarouselContent>
        {Project.images.map((img, idx) => (
          <CarouselItem key={idx}>
            <img className="w-full object-cover" src={img} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white text-2xl w-12 h-12 border-white" />
      <CarouselNext className="bg-white text-2xl w-12 h-12 border-white" />
    </Carousel>
  )
}

export default PreviewCourousal
