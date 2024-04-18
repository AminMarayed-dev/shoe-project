import { Layout } from "@/layout/Layout";
import { ChooseShoppingPage } from "@/templates/choose-shopping/Choose-Shopping";
import { El } from "@/utils/create-element";

export function ChooseShopping() {
    return El({
        element:'div',
        children:[Layout(ChooseShoppingPage())]
    })
}