import { Layout } from "@/layout/Layout";
import { WishListPage } from "@/templates/wishlist/WishList";
import { El } from "@/utils/create-element";

export function WishList() {
    return El({
        element:'div',
        children:[Layout(WishListPage())]
    })
}