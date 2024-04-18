import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function ChooseShoppingCheckout() {
  return El({
    element: "div",
    
    children: [
      Text({ text: "Choose Shopping", className: "font-bold" }),
      El({
        element: "div",
        id:'choose-shopping',
        className:
          "px-6 flex items-center justify-between mt-4 py-4  bg-white rounded-xl",
        children: [
          Icon({
            className: "icon-[mdi--truck]",
            otherClass: "text-md",
          }),
          Text({text: 'Choose Shopping Type'}),
          Icon({className:'icon-[ri--arrow-right-s-line]', otherClass:'cursor-pointer', eventListener:[
            {
                event:'click',
                callback:() => {
                    router.navigate('/choose-shopping')
                }
            }
          ]}),
        ],
      }),
    ],
  });
}
