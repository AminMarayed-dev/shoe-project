import { Button } from "@/components/button/Button";
import { El } from "@/utils/create-element";

export function filterCategoriesBtn() {
    return El({
        element: "div",
        className: "flex scrollbar overflow-x-auto active:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full scrollbar-h-1 w-full gap-3  mb-4",
        children: [
          Button({
            text: "All",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px]  mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Nike",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Adidas",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Puma",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Asics",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Reebok",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "New Balance",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
          Button({
            text: "Converse",
            className: "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 hover:bg-[#343A40] hover:text-white hover:border-none",
          }),
        ],
      })
}