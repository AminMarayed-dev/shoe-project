import { Button } from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function ModalPayment() {
  return El({
    element: "div",

    className:
      "flex flex-col gap-3 px-4 py-2 rounded-xl relative z-10 bg-white fixed top-[-600px] items-center ",
    children: [
      Image({ src: "../../src/assets/images/payment.jpg" }),
      Text({ text: "Order Successful!", className: "font-bold text-lg" }),
      Text({ text: "You have succesfully made order" }),
      Button({
        text: "View Order",
        className: "bg-black text-white w-full px-3 py-2 rounded-2xl",
        eventListener:[
            {
                event:'click',
                callback:() => {
                    router.navigate('/orders');
                }
            }
        ]
      }),
      Button({
        text: "View E-receipt",
        className: "bg-gray-200 text-black w-full px-3 py-2 rounded-2xl",
      }),
    ],
  });
}
