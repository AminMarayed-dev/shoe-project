import { Layout } from "@/layout/Layout";
import { SlideOnePage } from "@/templates/onboarding/slides/Slide-1";
import { El } from "@/utils/create-element";


export function SlideOne() {
    return El({
        element:'div',
        children:[Layout(SlideOnePage())]
    })
}