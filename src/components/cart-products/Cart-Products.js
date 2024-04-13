import { El } from "@/utils/create-element"
import { Card } from "../card/Card"


export function CartProducts({products, ...rest}) {
    return El({
        element:'div',
        className:'grid grid-cols-2 gap-3 mb-3',
        id:'some-products',
        children:products.map(product => Card({product:product})),
        ...rest
    })
}
