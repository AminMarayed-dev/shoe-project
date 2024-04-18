import { WishList } from "@/components/wishlist-cart/WishList-Cart";
import { El } from "@/utils/create-element";

export function WishlistItems({ wishlist }) {
  return El({
    element: "div",
    className: "grid grid-cols-2 gap-3",
    id: "wishlist-cart",
    children: wishlist.map((w) => WishList({ cart: w })),
  });
}
