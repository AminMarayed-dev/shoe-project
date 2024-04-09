import { El } from "@/utils/create-element";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";
import { Image } from "../image/Image";
import { router } from "@/routes/routes";
import { getProductsById } from "@/api/Products";
import { Link } from "../link/Link";

export function Card({ product , className, ...rest}) {
  const { id, name, price, imageURL } = product;
  return Link({
    href:`/products/${id}`,
    className: "flex flex-col",
    children: [
      Image({ src: imageURL, className: "rounded-xl cursor-pointer"}),
      Text({
        text: name.length < 15 ? name : name.substring(0, 15) + "...",
        className: "font-bold",
      }),
      Text({ text: `$ ${price}` }),
    ],
  });
}
