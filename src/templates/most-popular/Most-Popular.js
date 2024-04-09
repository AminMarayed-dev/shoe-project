import { getProducts } from "@/api/Products";
import { Card } from "@/components/card/Card";
import { El } from "@/utils/create-element";




const allProducts = await getProducts();
export function MostPopularPage() {
    return El({
        element:'div',
        className:'grid grid-cols-2 gap-5 px-5',
        children:allProducts.map(product => Card({product:product}))
    })
}