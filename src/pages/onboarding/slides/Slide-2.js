import { Layout } from "@/layout/Layout";
import { SlideTwoPage } from "@/templates/onboarding/slides/Slide-1";
import { El } from "@/utils/create-element";


export function SlideTwo() {
    return El({
        element:'div',
        children:[Layout(SlideTwoPage())]
    })
}