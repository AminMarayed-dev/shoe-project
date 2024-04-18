import { BackPage } from "@/components/backpage/BackPage";
import { Badge } from "@/components/badge/Badge";
import { Card } from "@/components/card/Card";
import { Image } from "@/components/image/Image";
import { Score } from "@/components/score/Score";
import { El } from "@/utils/create-element";
import { SingleProductAddToCart } from "@/widget/single-product-add-cart";
import { SingleProductColors } from "@/widget/single-product-colors";
import { SingleProductDescription } from "@/widget/single-product-description";
import { SingleProductIntro } from "@/widget/single-product-intro";
import { SingleProductSize } from "@/widget/single-product-size";

export function SingleProductPage(product) {
  return El({
    element: "div",
    className: "flex flex-col gap-3",
    children: [
      BackPage({ title: "" }),
      Image({ src: product.imageURL }),
      El({
        element:'div',
        className:'px-4 py-5',
        children:[
          SingleProductIntro(product),
          El({
            element:'div',
            className:'flex gap-3 items-center mt-2',
            children:[
              Badge({text:'5.37 sold',className:'!text-sm'}),
              Score({score:'4.3 (5,389 reviews)'})
            ]
          }),
          SingleProductDescription(),
          SingleProductAddToCart(product),
        ]
      })

    ],
  });
}
