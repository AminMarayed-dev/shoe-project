import { El } from "@/utils/create-element";
import { SlideOnePage } from "./Slide-1";
import { SlideTwoPage } from "./Slide-2";
import { SlideThreePage } from "./Slide-3";
import { Button } from "@/components/button/Button";


export function SlidesPage() {
    return El({
        element:'div',
        className:'swiper',
        
        children:[
            El({
                element:'div',
                className:'swiper-wrapper',
                children:[SlideOnePage(), SlideTwoPage(), SlideThreePage()]
            })
        ]

    })
}