import { Icon } from "@/components/icon/Icon";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function CheckoutShoppingAddress() {
  return El({
    element: "div",
    children: [
      Text({ text: "Shopping Address", className: "mb-4 px-3 font-bold mt-6" }),
      El({
        element: "div",
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
              Text({ text: "Home", id: "location" }),
              Text({ text: "61480 jkjkjnk jljljx", id: "address" }),
            ],
          }),
          Icon({
            className: "icon-[iconamoon--edit]",
            otherClass: "text-xl cursor-pointer",
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  const currentLoc =
                    document.getElementById("location").innerText;
                  
                  const currentAddress =
                    document.getElementById("address").innerText;
                    
                  router.navigate("/shopping-address");
                  console.log(currentAddress);
                  document.querySelectorAll("input").forEach((radio) => {
                    if (radio.value == currentLoc && radio.id == currentAddress){
                      radio.checked = true;
                    }
                      
                    else {
                      radio.checked = false;
                    }
                  });
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
}


