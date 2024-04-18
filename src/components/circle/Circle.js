import { El } from "@/utils/create-element";

export function Circle({ content = "", className, background, ...rest }) {
  return El({
    element: "span",
    innerText: content,
    className: `rounded-2xl cursor-pointer ${background}`,
    ...rest,
  });
}
