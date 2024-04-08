import { El } from "@/utils/create-element"
import { filterCategories } from "./filter-categories"
import { Card } from "@/components/card/Card"
import { getProducts } from "@/api/Products"


const someProducts = await getProducts(0, 8);
export function SomePopularProducts() {
    
    const element =  El({
        element:'div',
        className:'p-2',
        children:[
            filterCategories(),
            El({
                element:'div',
                className:'grid grid-cols-2 gap-3',
                children:someProducts.map(data => Card({product:data}))
            })
        ]
    })
    return element;
}