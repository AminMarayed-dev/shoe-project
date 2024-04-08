import { Button } from "@/components/button/Button";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { filterCategoriesBtn } from "./filter-categories-button";
import { router } from "@/routes/routes";

export function filterCategories() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center mb-4",
        children: [
          Text({ text: "Most Popular", className: "font-bold text-[20px]" }),
          Text({ text: "See All", className: "text-[16px] cursor-pointer", eventListener:[{
            event:'click',
            callback:() => {
              router.navigate('/most-popular')
            }
          }] }),
        ],
      }),
      filterCategoriesBtn()
    ],
  });
}
