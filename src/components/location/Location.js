import { El } from "@/utils/create-element";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";

let selectedLocation = 'Home';
let selectedAddress;

export function Location({address, location,value,checked, ...rest}) {
  return El({
    element: "label",
    id:'radio',
    className:
      "px-6 flex items-center justify-between mt-4 py-4  bg-white rounded-xl",
    children: [
      El({
        element: "span",
        className:
          "flex items-center bg-black text-white text-center px-2 py-2 rounded-3xl",
        children: [
          Icon({
            className: "icon-[mingcute--location-fill]",
            otherClass: "text-md",
          }),
        ],
      }),
      El({
        element: "div",
        children: [
          Text({ text: location }),
          Text({ text: address}),
        ],
      }),
      El({
        element:'input',
        type:'radio',
        className:'peer',
        id:address,
        value,
        checked,
        eventListener:[
            {
                event:'click',
                callback:(e) => {
                    // selectedLocation = e.target.value;
                    // selectedAddress = e.target.address;
                    e.target.value = location;
                    e.target.address = address;
                    
                  
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
