import { getProductsBySearch } from "@/api/Products";
import { getUsers } from "@/api/Users";
import { Button } from "@/components/button/Button";
import { CartProducts } from "@/components/cart-products/Cart-Products";
import { Icon } from "@/components/icon/Icon";
import { Input } from "@/components/input/Input";
import { Text } from "@/components/text/Text";
import { WishList } from "@/components/wishlist-cart/WishList-Cart";
import { El } from "@/utils/create-element";
import { BasketCartItems } from "@/widget/basket-cart-items";
import { InputSearch } from "@/widget/input-search";
import { WishlistItems } from "@/widget/wislist-items";

export function SearchPage() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "px-6 mt-4",
        children: [
          El({
            element: "div",
            className: "relative px-3",
            children: [
              Icon({
                className: "icon-[ic--round-search]",
                otherClass: "absolute top-3 left-6 text-lg bg-gray-400",
              }),
              Input({
                type: "text",
                placeholder: "search",
                className:
                  "bg-gray-100 px-10 py-2 w-full rounded-lg focus:ring-1 focus:ring-black",
              }),
            ],
            eventListener: [
              {
                event: "change",
                callback: (e) => {
                  const resultSearch = document.getElementById("search-result");
                  resultSearch.innerHTML = "";
                  const titleResult = El({
                    element: "div",
                    className: "flex items-center justify-between px-3 mt-4",
                    children: [
                      Text({
                        text: `Results for "${e.target.value}"`,
                        className: "font-bold",
                      }),
                      Text({ text: `0 found` , id:'found-items'}),
                    ],
                  });
                  resultSearch.append(titleResult);

                  const bodyResult = El({ element: "div", className: "px-4" });
                  // search by products
                  getProductsBySearch(e.target.value).then((products) => {
                    bodyResult.append(CartProducts({ products: products }));
                  });

                  // search by user
                  getUsers().then((response) => {
                    let { cart, orders, wishlist } = response[0];
                    cart = cart.filter((c) => c.name.includes(e.target.value));
                    bodyResult.append(BasketCartItems({ cart: cart }));

                    wishlist = wishlist.filter((w) =>
                      w.name.includes(e.target.value)
                    );
                    bodyResult.append(WishlistItems({wishlist:wishlist}));
                  });

                  resultSearch.append(bodyResult);
                  

                  e.target.value = "";
                },
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        id: "search-result",
        className: "w-full",
      }),
    ],
  });
}

//            El({
//     element:'div',
//     className:'flex justify-between items-center',
//     children:[
//         Text({text:'Recent', className:'font-bold'}),
//         Button({text: 'Clear All'})
//     ]
// }),



