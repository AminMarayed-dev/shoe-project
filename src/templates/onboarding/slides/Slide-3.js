import { Button } from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import { El } from "@/utils/create-element";


export function SlideThreePage() {
    return El({
        element:'div',
        className:'swiper-slide',
        children:[
            Image({src:'./src/assets/images/slide-3.jpg'}),
            El({
                element:'h3',
                innerText:'Let’s fulfill your fashion needs with shoearight now!'
            }),
            El({
                element:'div',
                className:''
            }),
            Button({text:'Get Started', className:'bg-blue-500'})
        ]
    })
}