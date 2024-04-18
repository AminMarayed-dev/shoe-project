import { BackPage } from "@/components/backpage/BackPage";
import { Card } from "@/components/card/Card";
import { CartProducts } from "@/components/cart-products/Cart-Products";
import { El } from "@/utils/create-element";



export function BrandPage(productsBrand) {
    return El({
        element:'div',
        className:'px-5',
        children: [
            BackPage({title: location.pathname.split('/')[2]}),
            CartProducts({products:productsBrand})
        ]
    })
}
// productsBrand.map(product => Card({product:product}))
