
import { getUsers } from "@/api/Users";
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";


const allCart = await getUsers().then((response) => {
  return response[0].cart;
});
console.log(allCart);
console.log(allCart);
export function CartCheckOut() {
  const totalPrice = allCart
    .map((cart) => cart.price * cart.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const element =  El({
    element: "div",
    className: "flex items-center justify-between px-4 ",
    children: [
      El({
        element: "div",
        children: [Text({ text: "total price", className:'text-sm' }), Text({ text: `$${totalPrice}`, id:'total-price', className:'font-bold text-xl' })],
      }),
      Button({
        text: "",
        className: "bg-black text-white flex  items-center px-14 py-2 rounded-3xl gap-3",
        children:[
          Text({text:'Checkout'}),
          Icon({className:'icon-[solar--arrow-right-bold]', otherClass:'text-xl'})
        ],
        eventListener: [
          {
            event: "click",
            callback: () => {
              router.navigate("/checkout");
            },
          },
        ],
      }),
    ],
  });
  return element;
}
