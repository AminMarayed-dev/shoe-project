import { El } from "@/utils/create-element";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";
import { Image } from "../image/Image";

export function Card({ name, price, imageURL, ...rest }) {
  return El({
    element: "div",
    className: "flex flex-col",
    children: [
      Image({ src: imageURL, className: "rounded-xl" }),
      Text({
        text: name.length < 20 ? name : name.substring(0, 20) + "...",
        className: "font-bold",
      }),
      Text({ text: `$ ${price}` }),
    ],
  });
}
