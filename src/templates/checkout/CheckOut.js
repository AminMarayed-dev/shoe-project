import { getUsers } from "@/api/Users";
import { BackPage } from "@/components/backpage/BackPage";
import { El } from "@/utils/create-element";
import { CheckoutShoppingAddress } from "@/widget/checkout-shopping-address";
import { ChooseShoppingCheckout } from "@/widget/choose-shopping-checkout";
import { OrderListCheckout } from "@/widget/oreder-list-checkout";
import { ChooseShoppingPage } from "../choose-shopping/Choose-Shopping";
import { DiscountCodeCheckout } from "@/widget/discount-code-checkout";
import { FactorCheckout } from "@/widget/factor-checkout";
import { Button } from "@/components/button/Button";
import { ButtonCheckout } from "@/widget/button-checkout";

const allCart = await getUsers().then((response) => {
    return response[0].cart;
})
export function CheckOutPage() {
    return El({
        element:'div',
        className:'bg-gray-100 h-full px-6 pb-4',
        children:[
            BackPage({title:'Checkout'}),
            CheckoutShoppingAddress(),
            OrderListCheckout(allCart),
            ChooseShoppingCheckout(),
            DiscountCodeCheckout(),
            FactorCheckout(),
            ButtonCheckout()
        ]
    })
}