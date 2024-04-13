import { El } from "@/utils/create-element";
import { Link } from "../link/Link";
import { Image } from "../image/Image";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";
import { deleteCart, getCart, getCartById, updateCart } from "@/api/Cart";
import { BasketCartItems } from "@/widget/basket-cart-items";
import { Modal } from "../modal-delete/Modal";
import { BackDrop } from "../backdrop/BackDrop";

export function BasketCart({ cart, className, ...rest }) {
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
              Icon({
                className: "icon-[ic--baseline-minus]",
                otherClass: "cursor-pointer",
                eventListener: [
                  {
                    event: "click",
                    callback: async (e) => {
                      if (cart.quantity < 2) return;
                      cart.quantity--;

                      await updateCart(cart.id, cart);
                      const { quantity, price } = await getCartById(cart.id);

                      const parentQuantity = e.target.nextElementSibling;
                      const parentPrice =
                        e.target.parentElement.previousElementSibling;
                      parentQuantity.innerHTML = quantity;
                      parentPrice.innerHTML = `$${price * quantity}`;
                      

                      const allCart = await getCart();
                      const totalPrice = allCart
                      .map((cart) => cart.price * cart.quantity)
                      .reduce((acc, curr) => acc + curr, 0);
                      document.getElementById('total-price').innerHTML = `$${totalPrice}`;
                    },
                  },
                ],
              }),
              Text({ text: `${quantity}`, id: "quantity" }),
              Icon({
                className: "icon-[ic--baseline-plus]",
                otherClass: "cursor-pointer",
                eventListener: [
                  {
                    event: "click",
                    callback: async (e) => {
                      cart.quantity++;
                      await updateCart(cart.id, cart);
                      const { quantity } = await getCartById(cart.id);

                      const parentQuantity = e.target.previousElementSibling;
                      const parentPrice =
                        e.target.parentElement.previousElementSibling;
                      parentQuantity.innerHTML = quantity;
                      parentPrice.innerHTML = `$${price * quantity}`;

                      
                      const allCart = await getCart();
                      const totalPrice = allCart
                      .map((cart) => cart.price * cart.quantity)
                      .reduce((acc, curr) => acc + curr, 0);
                      document.getElementById('total-price').innerHTML = `$${totalPrice}`;
                    },
                  },
                ],
              }),
            ],
          }),
          Icon({
            className: "icon-[solar--trash-bin-2-outline]",
            otherClass:
              "absolute top-[24px] right-[18px] text-2xl cursor-pointer",
            id:'trash',
            eventListener: [
              {
                event: "click",
                callback: async (e) => {
                  const selectedCart = await getCartById(cart.id);
                  document.getElementById('cart-container').append(Modal({cart:selectedCart, cartId:selectedCart.id}),BackDrop());
                  document.getElementById(selectedCart.id).querySelector('#trash').classList.add('hidden');
                  
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
