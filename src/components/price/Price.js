import { El } from "@/utils/create-element";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";

export function Prices({type, deadline, price, classIcon, value,checked, ...rest}) {
    return El({
        element: "label",
        className:
          "px-6 flex items-center justify-between mt-4 py-4  bg-white rounded-xl",
        children: [
          El({
            element: "span",
            className:
              "flex items-center bg-black text-white text-center px-2 py-2 rounded-3xl",
            children: [
              Icon({
                className: classIcon,
                otherClass: "text-md",
              }),
            ],
          }),
          El({
            element: "div",
            children: [
              Text({text:type}),
              Text({text:deadline}),
            ],
          }),
          Text({text:`$${price}`}),
          El({
            element:'input',
            type:'radio',
            className:'peer',
            value,
            checked,
            eventListener:[
                {
                    event:'click',
                    callback:(e) => {
                        // console.log(e.target.parentElement);
                        const otherRadio = document.querySelectorAll('input');
                        otherRadio.forEach((radio) => {
                            if(radio != e.target) radio.checked = false;
                        });
                    }
                }
            ]
          })
        ],
      });
}