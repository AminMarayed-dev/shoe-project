import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { Circle } from "@/components/circle/Circle";
import { getUsers, updateUsers } from "@/api/Users";

let selectedSize = 41;
let selectedColor = "white";
let existedCart;
let quantity = 1;
let defaultBg = 'bg-gray-200'

export function SingleProductAddToCart(product) {
  console.log(product);
  const element = El({
    element: "div",
    className:'flex flex-col gap-4',
    children: [
      El({
        element: "div",
        className: "flex gap-3 items-center",
        children: [
          El({
            element: "div",
            children: [
              El({
                element: "div",
                children: [
                  Text({ text: "Size", className: "font-bold mb-2" }),
                  ...product.sizes.map((p) =>
                    Circle({
                      content: p,
                      value: p,
                      id:'sizes',
                      background: "border-2 border-gray-400 mr-2  px-2 py-1.5",
                      eventListener: [
                        {
                          event: "click",
                          callback: (e) => {
                            
                            (selectedSize = e.target.value);
                          }
                        },
                      ],
                    })
                  ),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            children: [
              El({
                element: "div",
                children: [
                  Text({ text: "Color", className: "font-bold mb-2" }),
                  ...product.colors.map((p) =>
                    Circle({
                      content: p,
                      value: p,
                      background:`px-2 py-1.5`,
                      eventListener: [
                        {
                          event: "click",
                          callback: (e) => {
                            (selectedColor = e.target.value);
                            
                          }
                        },
                      ],
                    })
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex mt-4 items-center gap-3",
        children: [
          Text({ text: "Quantity" }),
          El({
            element: "div",
            className: "flex items-center gap-2  bg-gray-100 px-3 py-1 rounded-2xl",
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
                        `$${quantity * product.price}`;
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
                        `$${quantity * product.price}`;
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
        className: "flex gap-4 pt-3 border-t-2 justify-between items-center",
        children: [
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              Text({ text: "Total price: " , className:'text-sm'}),
              Text({ text: `$${quantity * product.price}`, id: "total-price", className:'font-bold text-xl' }),
            ],
          }),
          Button({
           text:'',  
           className:'bg-black text-white flex  items-center px-12 py-2 rounded-3xl gap-3 ',   
            children:[
              Icon({className:'icon-[uil--cart]', otherClass:'text-lg'}),
              Text({text:'Add To Cart'})
            ],
            eventListener: [
              {
                event: "click",
                callback: async () => {
                  await getUsers().then((response) => {
                    const cart = response[0].cart;
                    existedCart = cart.find(
                      (c) =>
                        c.size == selectedSize &&
                        c.color == selectedColor &&
                        c.productId == product.id
                    );
                    if (existedCart) {
                      existedCart.quantity = quantity;
                      quantity = 1;
                    } else {
                      cart.push({
                        id: Date.now(),
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
                    updateUsers(1, { cart: cart });
                    location.reload();
                  });
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
