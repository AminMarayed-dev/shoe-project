import { Card } from "@/components/card/Card";
import { El } from "@/utils/create-element";

export function SingleProductPage(product) {
  return El({
    element: "div",
    innerText: product.name,
  });
}
