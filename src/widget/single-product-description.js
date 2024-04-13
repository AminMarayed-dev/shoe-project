import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";

export function SingleProductDescription() {
    return El({
        element:'div',
        children:[
            Text({text:'Description', className:'font-bold'}),
            Text({text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis, quia corporis nulla amet labore eius molestias quam inventore quidem.'})
        ]
    })
}