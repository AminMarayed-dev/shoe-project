import { Button } from "@/components/button/Button";
import { El } from "@/utils/create-element";

export function filterCategories() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className:'flex justify-between',
        children: [
          El({
            element: "p",
            innerText: "Most Popular",
          }),
          El({
            element: "p",
            innerText: "See All",
          }),
        ],
      }),
      El({
        element: "div",
        className:'flex gap-3 w-full overflow-x-auto',
        children: [
          Button({ text: "All",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Nike",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Adidas",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Puma",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Asics",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Reebok",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "New Balance",className:'bg-slate-300 text-black border border-black px-3' }),
          Button({ text: "Converse",className:'bg-slate-300 text-black border border-black px-3' }),
        ],
      }),
      El({
        element:'div',
        className:'grid grid-cols-2 gap-2',
        children:[]
      })
    ],
  });
}
