import { Layout } from "@/layout/Layout";
import { BrandPage } from "@/templates/brand/Brand";
import { El } from "@/utils/create-element";

export function Brand(productsBrand) {
    return El({
        element:'div',
        children:[Layout(BrandPage(productsBrand))]
    })
}