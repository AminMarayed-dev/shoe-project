
import { getUsers } from "@/api/Users";
import { CheckoutCart } from "@/components/checkout-cart/Checkout-Cart";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";



export function OrderListCheckout(allCart) {
    return El({
        element:'div',
        className:'flex flex-col gap-3 mt-8 mb-6',
        children: [
            Text({text:'Order List', className:'font-bold'}),
            ...allCart.map(cart => CheckoutCart({cart: cart}))
        ]
    })
}