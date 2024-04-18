import { Icon } from "@/components/icon/Icon";
import { Image } from "@/components/image/Image";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function Header() {
  return El({
    element: "div",
    className: "flex justify-between items-center  py-3",
    children: [
      El({
        element: "span",
        className: "flex",
        children: [
          El({
            element:'span',
            className:'w-[50px] h-[50px]',
            children:[
              Image({src:'../../../src/assets/images/profile.jpg',className:'w-full h-full'}),
            ]
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
            otherClass: "text-2xl cursor-pointer",
          }),
          Icon({
            className: "icon-[mdi--cards-heart-outline]",
            otherClass: "text-2xl cursor-pointer",
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
