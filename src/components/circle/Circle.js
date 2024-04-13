import { El } from "@/utils/create-element";

export function Circle({ content = "", className, background, ...rest }) {
  return El({
    element: "span",
    innerText: content,
    className: `rounded-2xl p-1 w-[20px] h-[20px] cursor-pointer ${background}`,
    ...rest,
  });
}
