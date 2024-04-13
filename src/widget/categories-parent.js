import { El } from "@/utils/create-element";
import { CategoriesLogo } from "./categories";
import { getProducts } from "@/api/Products";



const allProducts = await getProducts();
export function CategoriesParent() {
    return El({
        element:'div',
        children:allProducts.map(data => CategoriesLogo({filterProduct:data}))
    })
}