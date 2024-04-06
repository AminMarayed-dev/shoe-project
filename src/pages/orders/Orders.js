import { Layout } from "@/layout/Layout";
import { OrdersPage } from "@/templates/orders/Orders";
import { El } from "@/utils/create-element";


export function Orders() {
    return El({
        element:'div',
        children:[Layout(OrdersPage())]
    })
}