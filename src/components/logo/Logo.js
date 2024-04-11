import { El } from "@/utils/create-element";

export function Logo({ src = "", className,logoClass, ...rest }) {
  return El({
    element:'span',
    className:'bg-gray-200 px-2 py-1 text-[25px] rounded-3xl text-center ',
    children:[
      El({
        element:'span',
        className:`cursor-pointer  ${logoClass}`,
      })
    ]

    // children: [
    //   El({
    //     element: "img",
    //     src,
    //     className:'w-[30px] h-[30px]',
    //   }),
    // ],
  });
}
