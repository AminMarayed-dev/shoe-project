import { getUsers } from "@/api/Users";
import { BasketCart } from "@/components/basket-cart/Basket-Cart";
import { Icon } from "@/components/icon/Icon";
import { Image } from "@/components/image/Image";
import { Modal } from "@/components/modal-delete/Modal";
import { Text } from "@/components/text/Text";
import { Footer } from "@/layout/footer/Footer";
import { El } from "@/utils/create-element";
import { BasketCartItems } from "@/widget/basket-cart-items";
import { CartCheckOut } from "@/widget/cart-checkout";

const allCart = await getUsers().then((response) => {
  return response[0].cart;
});

export function CartPage() {
  const element = El({
    element: "div",
    id: "cart-container",
    className: "container mx-auto py-6 h-screen relative",
    children: [
      El({
        element: "div",
        className:
          "flex w-full px-4 items-center justify-between bg-white mb-6 py-5 translate-y-[-22px]",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-4",
            children: [
              Image({
                src: "../../../src/assets/images/logo.png",
                className: "text-black w-[15px]",
              }),
              Text({ text: "My Cart", className: "font-bold text-lg" }),
            ],
          }),

          Icon({
            className: "icon-[mingcute--search-line]",
            otherClass: "text-2xl",
          }),
        ],
      }),
      BasketCartItems({ cart: allCart }),
      El({
        element: "div",
        className: "flex flex-col bg-white  w-full py-4 gap-5 rounded-t-3xl",

        children: [CartCheckOut(), Footer()],
      }),
    ],
  });
  return element;
}
