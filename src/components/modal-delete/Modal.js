import { El } from "@/utils/create-element";
import { Text } from "../text/Text";
import { BasketCart } from "../basket-cart/Basket-Cart";
import { Button } from "../button/Button";
import { deleteCart } from "@/api/Cart";

export function Modal({ cart, cartId }) {
  return El({
    element: "div",
    className: "flex flex-col gap-4 bg-slate-400 z-10 relative modal",
    id: cartId,
    children: [
      Text({ text: "Remove From Cart?", className: "font-bold" }),
      BasketCart({ cart: cart }),
      El({
        element: "div",
        className: "flex justify-between",
        children: [
          Button({
            text: "remove",
            className: "bg-black text-white",
            eventListener: [
              {
                event: "click",
                callback: async (e) => {
                  await deleteCart(cart.id);
                  e.target.closest(".modal").classList.add("hidden");
                  document.getElementById("backdrop").classList.add("hidden");
                  location.reload();
                },
              },
            ],
          }),
          Button({
            text: "Cancel",
            className: "bg-gray-300 text-black",
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  e.target.closest(".modal").classList.add("hidden");
                  document.getElementById("backdrop").classList.add("hidden");
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
}
