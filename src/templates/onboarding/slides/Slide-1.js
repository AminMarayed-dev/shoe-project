import { Button } from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import { El } from "@/utils/create-element";


export function SlideOnePage() {
    return El({
        element:'div',
        className:'swiper-slide',
        children:[
            Image({src:'./src/assets/images/slide-1.jpg'}),
            El({
                element:'h3',
                innerText:'We provide high quality products just for you'
            }),
            El({
                element:'div',
                className:''
            }),
            Button({text:'Next', className:'bg-blue-500 next'})
        ]
    })
}