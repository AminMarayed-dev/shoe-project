import { BackPage } from "@/components/backpage/BackPage";
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Prices } from "@/components/price/Price";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";
import { totalPrice } from "@/widget/factor-checkout";

export function ChooseShoppingPage() {
  return El({
    element: "div",
    className: "bg-gray-100 h-screen px-6 flex flex-col gap-4",
    children: [
      BackPage({ title: "Choose Shopping" }),
      Prices({
        type: "Economy",
        classIcon: "icon-[fluent--box-arrow-up-24-filled]",
        price: 10,
        value:'economy'
      }),
      Prices({
        type: "Regular",
        classIcon: "icon-[fluent--box-20-regular]",
        price: 15,
        checked: true,
        value:'regular'
      }),
      Prices({
        type: "Cargo",
        classIcon: "icon-[mdi--truck-cargo-container]",
        price: 15,
        value:'cargo'
      }),
      Prices({
        type: "Express",
        classIcon: "icon-[ant-design--truck-filled]",
        price: 20,
        value:'express'
      }),
      Button({
        text: "Apply",
        className: "w-full bg-black p-4 text-white rounded-full mt-12",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              const listPrice = [...document.querySelectorAll("input")];
              const selectedPrice = listPrice.find((price) => price.checked);

              router.navigate("/checkout");
              
              document.getElementById("choose-shopping").innerHTML = "";
              document.getElementById("choose-shopping").innerHTML =
                selectedPrice.parentElement.innerHTML;
              document
                .getElementById("choose-shopping")
                .classList.add(...["flex", "w-full", "justify-between"]);
              document
                .querySelector("#choose-shopping input")
                .classList.add("hidden");
              document.getElementById("choose-shopping").append(
                Icon({
                  className: "icon-[iconamoon--edit]",
                  otherClass: "text-xl cursor-pointer",
                  eventListener: [
                    {
                      event: "click",
                      callback: (e) => {
                        
                        router.navigate('/choose-shopping');
                        const priceValue = e.target.previousElementSibling.value;
                        document.querySelectorAll('input').forEach(radio => {
                          if(radio.value == priceValue) radio.checked = true;
                          else radio.checked = false;
                        })
                      },
                    },
                  ],
                })
              );

              // set shopping factor
              const priceValue = selectedPrice.previousElementSibling.innerText;
              const priceValueNum = Number(priceValue.replace(/[^\d.]/g, ''));

              document.getElementById('shopping-value').innerText = `$${priceValueNum}`;
              // console.log(document.getElementById('total-finally'));

              // set total finally factor
              const totalFinally = totalPrice - priceValueNum;
              document.getElementById('total-finally').innerText = `$${totalFinally}`
            },
          },
        ],
      }),
    ],
  });
}
