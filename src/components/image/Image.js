import { El } from "@/utils/create-element";

export function Image({ className = "", src = "" }) {
  return El({
    element: "img",
    src,
    className,
  });
}