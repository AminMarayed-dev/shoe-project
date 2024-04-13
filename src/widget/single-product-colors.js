import { Circle } from "@/components/circle/Circle";
import { El } from "@/utils/create-element";

export function SingleProductColors(product) {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        children: product.colors.map((p) => Circle({ content: p })),
      })
    ],
  });
}