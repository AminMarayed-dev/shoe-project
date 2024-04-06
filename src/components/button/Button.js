import { El } from "@/utils/create-element";

export function Button({ text, className = "", ...rest }) {
  return El({
    element: "button",
    innerText: text,
    className:
      `rounded-md text-center block w-full p-2  text-white ${className}`,
    ...rest,
  });
}