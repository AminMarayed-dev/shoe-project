import { El } from "@/utils/create-element";
import { Score } from "../score/Score";
import { Text } from "../text/Text";
import { Badge } from "../badge/Badge";
import { Icon } from "../icon/Icon";
import { Link } from "../link/Link";
import { Image } from "../image/Image";

export function WishList({cart}) {
    const { productId, name, price, imageURL } = cart;
    return Link({
        href:`/products/${productId}`,
        className: "flex flex-col relative",
        children: [
          Image({ src: imageURL, className: "rounded-2xl cursor-pointer h-[160px] mt-3 mb-1"}),
          Text({
            text: name.length < 15 ? name : name.substring(0, 15) + "...",
            className: "font-bold",
          }),
          El({
            element:'div',
            className:'flex gap-2 items-center',
            children:[
                Score({score:'4.6'}),
                Text({text:'|'}),
                Badge({text:'6,641 sold'})
            ]
          }),
          Text({ text: `$ ${price}` }),
          Icon({className:'icon-[f7--heart-circle-fill]', otherClass:'bg-black absolute top-6 right-3 text-3xl'})
        ],
      });
}
