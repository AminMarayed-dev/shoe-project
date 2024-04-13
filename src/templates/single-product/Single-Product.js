import { BackPage } from "@/components/backpage/BackPage";
import { Card } from "@/components/card/Card";
import { Image } from "@/components/image/Image";
import { El } from "@/utils/create-element";
import { SingleProductAddToCart } from "@/widget/single-product-add-cart";
import { SingleProductColors } from "@/widget/single-product-colors";
import { SingleProductDescription } from "@/widget/single-product-description";
import { SingleProductIntro } from "@/widget/single-product-intro";
import { SingleProductSize } from "@/widget/single-product-size";

export function SingleProductPage(product) {
  return El({
    element: "div",
    className:'flex flex-col gap-3',
    children: [BackPage({ title: "" }),Image({src:product.imageURL}), SingleProductIntro(product), SingleProductDescription(), SingleProductAddToCart(product)],
  });
}
