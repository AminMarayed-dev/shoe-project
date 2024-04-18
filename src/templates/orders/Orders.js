import { Icon } from "@/components/icon/Icon";
import { Image } from "@/components/image/Image";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { FilterPayment } from "@/widget/filter-order";

export function OrdersPage() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className:
          "flex w-full px-4 items-center justify-between bg-white  py-5 translate-y-[-22px]",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-4 py-6 px-3",
            children: [
              Image({
                src: "../../../src/assets/images/logo.png",
                className: "text-black w-[15px]",
              }),
              Text({ text: "My Orders", className: "font-bold text-lg" }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-3 items-center",
            children: [
              Icon({
                className: "icon-[mingcute--search-line]",
                otherClass: "text-2xl",
              }),
              Icon({
                className: "icon-[mynaui--dots-circle]",
                otherClass: "text-2xl",
              }),
            ],
          }),
        ],
      }),
      FilterPayment(),
    ],
  });
}
