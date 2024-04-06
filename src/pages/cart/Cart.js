import { Layout } from "@/layout/Layout";
import { CartPage } from "@/templates/cart/Cart";
import { El } from "@/utils/create-element";

export function Cart() {
    return El({
        element:'div',
        children:[Layout(CartPage())]
    })
}