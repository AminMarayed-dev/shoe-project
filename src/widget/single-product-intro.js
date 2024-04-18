import { getUsers, updateUsers } from "@/api/Users";
import { postWishList } from "@/api/wishlist";
import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function SingleProductIntro(product) {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center",
        children: [
          Text({ text: product.category, className: "font-bold text-xl" }),
          Icon({
            className: "icon-[mdi--cards-heart-outline]",
            otherClass: "text-xl cursor-pointer",
            id: "wishlist",
            eventListener: [
              {
                event: "click",
                callback: async () => {
                  await getUsers().then((response) => {
                    const wishlist = response[0].wishlist;
                    const existedWishlist = wishlist.find(
                      (w) => w.productId == product.id
                    );
                    if (existedWishlist) {
                      alert("this product was added wishlist page");
                    } else {
                      wishlist.push({
                        id: Date.now(),
                        userId: 1,
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        imageURL: product.imageURL,
                      });
                      updateUsers(1, { wishlist: wishlist });
                      // change bg
                      document
                        .getElementById("wishlist")
                        .classList.add("bg-red-500");
                    }
                  });
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
}
