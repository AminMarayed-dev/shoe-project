import { SlidesPage } from "@/templates/onboarding/slides/Slides";
import { El } from "@/utils/create-element";


export function Slides() {
    return El({
        element:'div',
        children:[SlidesPage()]
    })
}