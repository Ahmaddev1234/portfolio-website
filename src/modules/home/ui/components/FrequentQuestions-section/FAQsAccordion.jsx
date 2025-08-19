import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FAQsAccordion({question,answer}) {
    return (
        <Accordion type="single" collapsible className=" border rounded-md ">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-tertiary font-semibold  text-[16px] font-quicksand hover:underline-none">{question}</AccordionTrigger>
                <AccordionContent className="font-roboto text-secondary text-[16px]  ">
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FAQsAccordion
