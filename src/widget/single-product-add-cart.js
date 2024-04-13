import { PostCart, getCart, updateCart } from "@/api/Cart";
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { Circle } from "@/components/circle/Circle";

let selectedSize = 41;
let selectedColor = "white";
let existedCart;
let quantity = 1;

export function SingleProductAddToCart(product) {
  console.log(product);
  const element = El({
    element: "div",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "div",
            children: product.sizes.map((p) =>
              Circle({
                content: p,
                value: p,
                eventListener: [
                  {
                    event: "click",
                    callback: (e) => (selectedSize = e.target.value),
                  },
                ],
              })
            ),
          }),
        ],
      }),
      El({
        element: "div",
        children: [
          El({
            element: "div",
            children: product.colors.map((p) =>
              Circle({
                content: p,
                value: p,
                eventListener: [
                  {
                    event: "click",
                    callback: (e) => (selectedColor = e.target.value),
                  },
                ],
              })
            ),
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-between",
        children: [
          Text({ text: "Quantity" }),
          El({
            element: "div",
            className: "flex items-center gap-2",
            children: [
              Icon({
                className: "icon-[ic--baseline-minus]",
                otherClass: "cursor-pointer",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      if (quantity < 2) return;
                      quantity--;
                      document.getElementById("quantity").innerHTML = quantity;
                      document.getElementById("total-price").innerHTML =
                        quantity * product.price;
                    },
                  },
                ],
              }),
              Text({ text: "1", id: "quantity" }),
              Icon({
                className: "icon-[ic--baseline-plus]",
                otherClass: "cursor-pointer",
                eventListener: [
                  {
                    event: "click",
                    callback: async () => {
                      quantity++;
                      document.getElementById("quantity").innerHTML = quantity;
                      document.getElementById("total-price").innerHTML =
                        quantity * product.price;
                    },
                  },
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-4",
        children: [
          El({
            element: "div",
            className: "flex",
            children: [
              Text({ text: "Total price: " }),
              Text({ text: quantity * product.price, id: "total-price" }),
            ],
          }),
          Button({
            text: "Add to cart",
            eventListener: [
              {
                event: "click",
                callback: async () => {
                  const cart = await getCart();
                  existedCart = cart.find(
                    (c) =>
                      c.size == selectedSize &&
                      c.color == selectedColor &&
                      c.productId == product.id
                  );
                  if (existedCart) {
                    existedCart.quantity = quantity;
                    await updateCart(existedCart.id, existedCart);

                  } else {
                    await PostCart({
                      userId: 1,
                      name: product.name,
                      price: product.price,
                      color: selectedColor,
                      size: selectedSize,
                      productId: product.id,
                      imageURL: product.imageURL,
                      quantity,
                    });
                  }
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
  return element;
}
