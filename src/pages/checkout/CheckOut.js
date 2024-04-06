import { Layout } from "@/layout/Layout";
import { CheckOutPage } from "@/templates/checkout/CheckOut";
import { El } from "@/utils/create-element";

export function CheckOut() {
    return El({
        element:'div',
        children:[Layout(CheckOutPage())]
    })
}