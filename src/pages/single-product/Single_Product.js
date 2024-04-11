import { Layout } from "@/layout/Layout";
import { SingleProductPage } from "@/templates/single-product/Single-Product";
import { El } from "@/utils/create-element";

export function SingleProduct(product){
    return El({
        element:'div',
        children:[Layout(SingleProductPage(product))]
    })
}