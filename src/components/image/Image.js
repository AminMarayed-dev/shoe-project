import { El } from "@/utils/create-element";

export function Image({ className = "", src = "", ...rest }) {
  return El({
    element: "img",
    src,
    className,
    ...rest
  });
}