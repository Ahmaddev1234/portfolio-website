"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function DetailsAccordion({title, detail, Icon}) {
    return (
        <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-tertiary font-semibold text-[16px] font-quicksand hover:no-underline">
                    
                    <div className="flex items-center gap-2">
                        <Icon strokeWidth={1.5} className="w-5 h-5" />
                        <span>{title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="font-roboto text-secondary text-[16px]">
                    {detail}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default DetailsAccordion
