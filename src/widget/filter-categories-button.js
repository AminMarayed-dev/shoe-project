import { getProducts } from "@/api/Products";
import { Button } from "@/components/button/Button";
import { Card } from "@/components/card/Card";
import { CartProducts } from "@/components/cart-products/Cart-Products";
import { El } from "@/utils/create-element";

let filterValue = "all";
let someProducts = await getProducts();

export function filterCategoriesBtn() {
  return El({
    element: "div",
    className:
      "flex scrollbar overflow-x-auto active:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full scrollbar-h-1 w-full gap-3  mb-4",
    children: [
      Button({
        text: "All",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px]  mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
        eventListener: [
          {
            event: "click",
            callback: async (e) => {
              
              // filterValue = "NIKE";
              const parent = e.target.parentElement.parentElement.nextElementSibling;
              parent.innerHTML = "";
              const newChildren = someProducts;
              parent.append(
                ...newChildren.map((newChild) => Card({ product: newChild }))
              );
            },
          },
        ],
      }),
      Button({
        text: "Nike",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
        value: "NIKE",
        eventListener: [
          {
            event: "click",
            callback: async (e) => {
              filterValue = "NIKE";
              const parent = e.target.parentElement.parentElement.nextElementSibling;
              parent.innerHTML = "";
              // const newChildren = await getProducts(8, 0, "brand", filterValue);
              const newChildren = someProducts.filter(product => product.brand == filterValue);
              parent.append(
                ...newChildren.map((newChild) => Card({ product: newChild }))
              );
            },
          },
        ],
      }),
      Button({
        text: "Adidas",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
        eventListener: [
          {
            event: "click",
            callback: async (e) => {
              filterValue = "ADIDAS";
              const parent = e.target.parentElement.parentElement.nextElementSibling;
              parent.innerHTML = "";
              const newChildren = someProducts.filter(product => product.brand == filterValue);
              parent.append(
                ...newChildren.map((newChild) => Card({ product: newChild }))
              );
            },
          },
        ],
      }),
      Button({
        text: "Puma",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
        eventListener: [
          {
            event: "click",
            callback: async (e) => {
              filterValue = "PUMA";
              const parent = e.target.parentElement.parentElement.nextElementSibling;
              parent.innerHTML = "";
              const newChildren = someProducts.filter(product => product.brand == filterValue);
              
              parent.append(
                ...newChildren.map((newChild) => Card({ product: newChild }))
              );
            },
          },
        ],
      }),
      Button({
        text: "Asics",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
          eventListener: [
            {
              event: "click",
              callback: async (e) => {
                filterValue = "ASICS";
                const parent = e.target.parentElement.parentElement.nextElementSibling;
                parent.innerHTML = "";
                const newChildren = someProducts.filter(product => product.brand == filterValue);
                
                parent.append(
                  ...newChildren.map((newChild) => Card({ product: newChild }))
                );
              },
            },
          ],
      }),
      Button({
        text: "Reebok",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
          eventListener: [
            {
              event: "click",
              callback: async (e) => {
                filterValue = "REEBOK";
                const parent = e.target.parentElement.parentElement.nextElementSibling;
                parent.innerHTML = "";
                const newChildren = someProducts.filter(product => product.brand == filterValue);
                
                parent.append(
                  ...newChildren.map((newChild) => Card({ product: newChild }))
                );
              },
            },
          ],
      }),
      Button({
        text: "New Balance",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
        eventListener: [
            {
              event: "click",
              callback: async (e) => {
                filterValue = "NEW BALANCE";
                const parent = e.target.parentElement.parentElement.nextElementSibling;
                parent.innerHTML = "";
                const newChildren = someProducts.filter(product => product.brand == filterValue);
                
                parent.append(
                  ...newChildren.map((newChild) => Card({ product: newChild }))
                );
              },
            },
          ],
      }),
      Button({
        text: "Converse",
        className:
          "text-[#343A40] border-2 border-black px-3 py-1 rounded-xl text-[14px] mb-2 focus:bg-[#343A40] focus:text-white focus:border-none",
          eventListener: [
            {
              event: "click",
              callback: async (e) => {
                filterValue = "CONVERSE";
                const parent = e.target.parentElement.parentElement.nextElementSibling;
                parent.innerHTML = "";
                const newChildren = someProducts.filter(product => product.brand == filterValue);
                
                parent.append(
                  ...newChildren.map((newChild) => Card({ product: newChild }))
                );
              },
            },
          ],
      }),
    ],
  });
}
