import { El } from "@/utils/create-element";

export function Text({ text = "", ...rest }) {
  return El({
    element: "p",
    innerHTML : text,
    ...rest,
  });
}
