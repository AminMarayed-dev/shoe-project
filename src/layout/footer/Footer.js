import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { Cart } from "@/pages/cart/Cart";
import { router } from "@/routes/routes";
import { changePage } from "@/utils/change-page";
import { El } from "@/utils/create-element";

export function Footer() {
  return El({
    element: "div",
    className: "flex  px-10 py-2 justify-between items-center  bg-white",
    children: [
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({
            className: "icon-[ion--home-sharp]",
            otherClass: "cursor-pointer  text-[20px]  focus:bg-[#152536]",
            id: "home-icon",
          }),

          Text({ text: "Home", className: "text-[10px] text-black" }),
        ],
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              if (e.target.id == "home-icon") {
                e.target.classList.remove("icon-[ion--home-outline]");
                e.target.classList.add("icon-[ion--home-sharp]");
              }
              router.navigate("/home");
            },
          },
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",

        children: [
          Icon({
            className:
              "icon-[solar--cart-linear] cursor-pointer text-[#152536] text-[20px]",
            id:'cart-icon'
          }),
          Text({ text: "Cart", className: "text-[10px]" }),
        ],
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              router.navigate("/cart");
              if(e.target.id == 'cart-icon') {
                e.target.classList.toggle('icon-[solar--cart-linear]');
                e.target.classList.toggle('icon-[solar--cart-bold]');
              }
            },
          },
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({
            className:
              "icon-[ic--outline-shopping-cart] text-[#152536] text-[20px] focus:bg-[#152536]",
          }),
          Text({ text: "Orders", className: "text-[10px]" }),
        ],
        eventListener: [
          {
            event: "click",
            callback: () => {
              router.navigate("/orders");
            },
          },
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({
            className:
              "icon-[prime--wallet] text-[#152536] text-[20px] focus:bg-[#152536]",
          }),
          Text({ text: "Wallet", className: "text-[10px]" }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col items-center cursor-pointer",
        children: [
          Icon({
            className:
              "icon-[mdi--user-outline]  text-[#152536] text-[20px] focus:bg-[#152536]",
          }),
          Text({ text: "Profile", className: "text-[10px]" }),
        ],
      }),
    ],
  });
}
