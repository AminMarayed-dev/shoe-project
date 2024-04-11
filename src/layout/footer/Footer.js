import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { Cart } from "@/pages/cart/Cart";
import { router } from "@/routes/routes";
import { changePage } from "@/utils/change-page";
import { El } from "@/utils/create-element";

export function Footer() {
  return El({
    element: "div",
    className: "flex  px-10 py-2 justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({
            className: "icon-[ion--home-outline]",
            otherClass: "cursor-pointer text-[#152536] text-[20px]  focus:bg-[#152536]",
          }),

          Text({ text: "Home", className: "text-[10px]" }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        eventListener: [
          {
            event: "click",
            callback: () => {
                router.navigate('/cart');
            },
          },
        ],
        children: [
          Icon({ className: "icon-[uil--cart] cursor-pointer text-[#152536] text-[20px] focus:bg-[#152536]" }),
          Text({ text: "Cart", className: "text-[10px]" }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({ className: "icon-[ic--outline-shopping-cart] text-[#152536] text-[20px] focus:bg-[#152536]" }),
          Text({ text: "Orders", className: "text-[10px]" }),
        ],
        eventListener: [
            {
              event: "click",
              callback: () => {
                  router.navigate('/orders');
              },
            },
          ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({ className: "icon-[prime--wallet] text-[#152536] text-[20px] focus:bg-[#152536]" }),
          Text({ text: "Wallet", className: "text-[10px]" }),
        ],
        eventListener: [
            {
              event: "click",
              callback: () => {
                  router.navigate('/cart');
              },
            },
          ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({ className: "icon-[mdi--user-outline]  text-[#152536] text-[20px] focus:bg-[#152536]" }),
          Text({ text: "Profile", className: "text-[10px]" }),
        ],
      }),
    ],
  });
}
