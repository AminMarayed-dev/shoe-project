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
        className:'flex justify-between',
        children: [
          Text({ text: product.category }),
          Icon({
            className: "icon-[mdi--cards-heart-outline]",
            otherClass: "text-xl cursor-pointer",
            id:'wishlist',
            eventListener: [
              {
                event: "click",
                callback: async() => {
                  // router.navigate("/wishlist");
                  await postWishList({
                    userId:1,
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    imageURL: product.imageURL,
                    brand: product.brand,
                  });
                  // change bg
                  document.getElementById('wishlist').classList.add('bg-red-500');
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
}
