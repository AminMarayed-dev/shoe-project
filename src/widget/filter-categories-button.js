import { Button } from "@/components/button/Button";
import { El } from "@/utils/create-element";

export function filterCategoriesBtn() {
    return El({
        element: "div",
        className: "flex overflow-x-auto overflow-y-none w-full gap-3  mb-4",
        children: [
          Button({
            text: "All",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px] ",
          }),
          Button({
            text: "Nike",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "Adidas",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "Puma",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "Asics",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "Reebok",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "New Balance",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
          Button({
            text: "Converse",
            className: "text-gray-600 border-2 border-black px-3 py-1 rounded-xl text-[14px]",
          }),
        ],
      })
}