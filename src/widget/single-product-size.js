import { Circle } from "@/components/circle/Circle";
import { El } from "@/utils/create-element";

export function SingleProductSize(product) {
  
  const element =  El({
    element: "div",
    children: [
      El({
        element: "div",
        children: product.sizes.map((p) => Circle({ content: p, value:p, eventListener: [
          {
            event:'click',
            callback: (e) => console.log(e.target.value)
          }
        ]})),
      })
    ],
  });
  return element;
}
