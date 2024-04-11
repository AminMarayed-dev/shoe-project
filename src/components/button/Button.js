import { El } from "@/utils/create-element";

export function Button({ text, className = "", ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:`whitespace-nowrap ${className}`,
    ...rest,
  });
}