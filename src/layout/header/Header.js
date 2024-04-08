import { Icon } from "@/components/icon/Icon";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function Header() {
  return El({
    element: "div",
    className: "flex justify-between items-center px-4 py-1",
    children: [
      El({
        element: "span",
        className: "flex",
        children: [
          El({
            element: "img",
          }),
          El({
            element: "span",

            children: [
              El({
                element: "p",
                className: "text-gray-500",
                innerText: "Good Morning 👋",
              }),
              El({
                element: "p",
                className: "font-bold",
                innerText: "Saeed Abdilar",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "span",
        className: "flex gap-2",
        children: [
          Icon({
            className: "icon-[mdi--notifications-none]",
            otherClass: "text-xl cursor-pointer",
          }),
          Icon({
            className: "icon-[mdi--cards-heart-outline]",
            otherClass: "text-xl cursor-pointer",
            eventListener: [
              {
                event: "click",
                callback: () => router.navigate("/wishlist"),
              },
            ],
          }),
        ],
      }),
    ],
  });
}
