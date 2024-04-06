import { Button } from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import { El } from "@/utils/create-element";


export function SlideTwoPage() {
    return El({
        element:'div',
        className:'swiper-slide',
        children:[
            Image({src:'./src/assets/images/slide-2.jpg'}),
            El({
                element:'h3',
                innerText:'Your satisfaction is our number one periority'
            }),
            El({
                element:'div',
                className:''
            }),
            Button({text:'Next', className:'bg-blue-500 next'})
        ]
    })
}