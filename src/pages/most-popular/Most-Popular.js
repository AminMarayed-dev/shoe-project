import { Layout } from "@/layout/Layout";
import { MostPopularPage } from "@/templates/most-popular/Most-Popular";
import { El } from "@/utils/create-element";

export function MostPopular() {
    return El({
        element:'div',
        children:[Layout(MostPopularPage())]
    })
}