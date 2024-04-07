import { Footer } from "@/layout/footer/Footer";
import { El } from "@/utils/create-element";

export function CartPage() {
    return El({
        element:'div',
        children:[Footer()]
    })
}