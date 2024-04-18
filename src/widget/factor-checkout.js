import { getUsers } from "@/api/Users";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";

const allCart = await getUsers().then((response) => {
  return response[0].cart;
});

export const totalPrice = allCart
  .map((cart) => cart.price * cart.quantity)
  .reduce((acc, curr) => acc + curr, 0);

export function FactorCheckout() {
  const element = El({
    element: "div",
    children: [
      El({
        element: "div",
        className:
          "flex flex-col bg-white px-5  py-5 w-full gap-2 mt-4 mb-2 rounded-lg",
        children: [
          El({
            element: "div",
            className: "pb-4 border-b-2 flex flex-col gap-3",
            children: [
              El({
                element: "div",
                className: "flex justify-between items-center",
                children: [
                  Text({ text: "Amount" }),
                  Text({
                    text: `$${totalPrice}`,
                    className: "font-bold",
                    id: "amount",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between items-center",
                children: [
                  Text({ text: "Shopping" }),
                  Text({
                    text: "-",
                    className: "font-bold",
                    id: "shopping-value",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [
              Text({ text: "Total" }),
              Text({ text: `$${0}`, className: "font-bold", id:'total-finally' }),
            ],
          }),
        ],
      }),
    ],
  });

  return element;
}
