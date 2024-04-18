import { El } from "@/utils/create-element";
import { Image } from "../image/Image";
import { Text } from "../text/Text";
import { Link } from "../link/Link";

export function CheckoutCart({cart, className, ...rest }) {
    const { id, name, price, imageURL, size, color, productId, quantity } = cart;
    const element = El({
        element: "div",
        className: "bg-white rounded-2xl p-5 relative flex items-center gap-5",
        children: [
          Link({
            href: `/products/${productId}`,
            children: [
              Image({ src: imageURL, className: "w-[120px] h-[120px] rounded-xl" }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-1.5",
            children: [
              Text({
                text: name.length < 15 ? name : name.substring(0, 15) + "...",
                className: "font-bold",
              }),
              Text({ text: `size:${size}  color:${color}` }),
              Text({
                text: `$${price * quantity}`,
                className: "font-bold",
                id: "price",
              }),
              El({
                element: "div",
                className:
                  "flex items-center gap-2 absolute bottom-[35px] right-[20px]",
                children: [
                  Text({ text: `${quantity}`, id: "quantity" }),
                ],
              }),
            ],
          }),
        ],
      });
      return element;
}