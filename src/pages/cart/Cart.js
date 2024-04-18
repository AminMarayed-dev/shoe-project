import { Layout } from "@/layout/Layout";
import { CartPage } from "@/templates/cart/Cart";
import { El } from "@/utils/create-element";

export function Cart() {
    return El({
        element:'div',
        className:'bg-gray-100',
        children:[Layout(CartPage())]
    })
}