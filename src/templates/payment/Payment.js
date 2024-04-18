import { getUsers, updateUsers } from "@/api/Users";
import { BackDrop } from "@/components/backdrop/BackDrop";
import { BackPage } from "@/components/backpage/BackPage";
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Payment } from "@/components/payment/Payment";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { ModalPayment } from "@/widget/modal-payment";

export function PaymentPage() {
  return El({
    element: "div",
    className: "px-4 flex flex-col gap-4 bg-gray-100",
    id: "payment-container",
    children: [
      El({
        element: "div",
        className: "flex items-center justify-between",
        children: [
          BackPage({ title: "Payments Methods" }),
          Icon({
            className: "icon-[mdi-light--plus-box]",
            otherClass: "text-3xl mt-2",
          }),
        ],
      }),
      Text({
        text: "Select the payment method you want to use",
        className: "text-gray-600",
      }),
      El({
        element: "div",
        className: "bg-gray-100  flex flex-col gap-4",
        children: [
          Payment({
            classIcon: "icon-[solar--wallet-bold]",
            type: "My Wallet",
            className: "w-full",
            checked: true,
          }),
          Payment({
            classIcon: "icon-[logos--paypal]",
            type: "PayPal",
            className: "w-full",
          }),
          Payment({
            classIcon: "icon-[flat-color-icons--google]",
            type: "Google Pay",
            className: "w-full",
          }),
          Payment({
            classIcon: "icon-[devicon--apple]",
            type: "Apple Pay",
            className: "w-full",
          }),
          Payment({
            classIcon: "icon-[logos--mastercard]",
            type: ".... .... .... 4679",
            className: "w-full",
          }),
        ],
      }),
      Button({
        text: "Confirm Payment",
        className: "bg-black text-white py-4 px-4 rounded-[30px] w-full mt-8",
        eventListener: [
          {
            event: "click",
            callback: async () => {
              const paymentParent =
                document.getElementById("payment-container");
              paymentParent.append(BackDrop(), ModalPayment());

              let orders = [];
              await getUsers().then((response) => {
                orders = response[0].orders;
                orders.push(...response[0].cart);
                // clear all cart items
                response[0].cart = [];
              });
              await updateUsers(1, { orders: orders });
            },
          },
        ],
      }),
    ],
  });
}
