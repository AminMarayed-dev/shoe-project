import { El } from "@/utils/create-element"
import { filterCategories } from "./filter-categories"
import { Card } from "@/components/card/Card"
import { getProducts } from "@/api/Products"
import { CartProducts } from "@/components/cart-products/Cart-Products";


const someProducts = await getProducts(8, 0);
export function SomePopularProducts() {
    
    const element =  El({
        element:'div',
        className:'p-2',
        children:[
            filterCategories(),
            // El({
            //     element:'div',
            //     className:'grid grid-cols-2 gap-3 mb-3',
            //     id:'some-products',
            //     children:someProducts.map(data => Card({product:data}))
            // })
            CartProducts({products: someProducts, id:'some-products'})
        ]
    })
    return element;
}