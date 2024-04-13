import { getCart } from "@/api/Cart";
import { Button } from "@/components/button/Button";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

const allCart = await getCart();
export function CartCheckOut() {
  const totalPrice = allCart
    .map((cart) => cart.price * cart.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const element =  El({
    element: "div",
    className: "flex items-center justify-between",
    children: [
      El({
        element: "div",
        children: [Text({ text: "total price" }), Text({ text: `$${totalPrice}`, id:'total-price' })],
      }),
      Button({
        text: "checkout",
        className: "bg-black text-white",
        eventListener: [
          {
            event: "click",
            callback: () => {
              router.navigate("/checkout");
            },
          },
        ],
      }),
    ],
  });
  return element;
}
