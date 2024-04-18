import { Layout } from "@/layout/Layout";
import { ShoppingAddressPage } from "@/templates/shopping-address/Shopping-Address";
import { El } from "@/utils/create-element";

export function ShoppingAdress() {
    return El({
        element:'div',
        children:[Layout(ShoppingAddressPage())]
    })
}