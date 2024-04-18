import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function ButtonCheckout() {
  return Button({
    text: "",
    className:
      "bg-black text-white flex  items-center px-14 py-3 rounded-3xl justify-center w-full mt-5",
    children: [
      Text({ text: "Continue to Payment" }),
      Icon({
        className: "icon-[solar--arrow-right-bold]",
        otherClass: "text-xl ml-3",
      }),
    ],
    eventListener:[
        {
            event:'click',
            callback:() => {
                router.navigate('/payment')
            }
        }
    ]
  });
}
