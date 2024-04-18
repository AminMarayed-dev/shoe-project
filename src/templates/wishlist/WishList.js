import { getUsers } from "@/api/Users";
import { getWishList } from "@/api/wishlist";
import { BackPage } from "@/components/backpage/BackPage";
import { Icon } from "@/components/icon/Icon";
import { WishList } from "@/components/wishlist-cart/WishList-Cart";
import { El } from "@/utils/create-element";
import { filterCategoriesBtn } from "@/widget/filter-categories-button";

const wishlistCart = await getUsers().then((response) => {
  return response[0].wishlist;
});

export function WishListPage() {
  return El({
    element: "div",
    className: "flex flex-col gap-4 px-5",
    children: [
      El({
        element:'div',
        className:'flex items-center justify-between py-2',
        children:[
          BackPage({ title: "My Wishlist" }),
          Icon({ className: "icon-[mingcute--search-line]",otherClass:'text-2xl' }),
        ]
      }),
      filterCategoriesBtn({parentId:'wishlist-cart', child:wishlistCart }),
      El({
        element: "div",
        className: "grid grid-cols-2 gap-3",
        id:'wishlist-cart',
        children: wishlistCart.map((wishlist) => WishList({ cart: wishlist })),
      }),
    ],
  });
}
