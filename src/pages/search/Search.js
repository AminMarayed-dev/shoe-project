import { Layout } from "@/layout/Layout";
import { SearchPage } from "@/templates/search/Search";
import { El } from "@/utils/create-element";


export function Search() {
    return El({
        element:'div',
        children:[Layout(SearchPage())]
    })
}