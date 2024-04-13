import { getCart } from "@/api/Cart";
import { BasketCart } from "@/components/basket-cart/Basket-Cart";
import { El } from "@/utils/create-element";


// const allCart = await getCart();
export function BasketCartItems({cart}) {
  return El({
    element: "div",
    id:'basket',
    className: "flex flex-col gap-5",
    children: cart.map((c) => BasketCart({ cart: c }))
  });
}


