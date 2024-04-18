import { Image } from "@/components/image/Image";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";
import { WelcomePage } from "./Welcome";
import Cookies from "js-cookie";


export function LoadingPage() {
  const hidePageContent = () => {
    const pageContent = document.querySelector("#loading");
    if (pageContent) {
      pageContent.style.display = "none";
      document.getElementById("welcome").style.display = "flex";
    }
  };

  setTimeout(hidePageContent, 3000);

  const element = El({
    element: "div",
    className: "flex flex-col p-4 items-center  w-full h-screen",
    id: "loading",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-2 h-[765px]",
        children: [
          El({
            element: "div",
            className: "bg-black px-2 py-2 rounded-3xl",
            children: [
              Image({
                src: "../../../src/assets/images/logo.svg",
                className: "w-[24px] h-[29px] text-[10px]",
              }),
            ],
          }),
          Text({
            text: "Shoea",
            className: "font-bold text-[#152536] text-[50px]",
          }),
        ],
      }),

      El({
        element: "div",
        className:
          "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black",
        role: "status",
        children: [
          El({
            element: "span",
            className:
              "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
            innerText: "loading...",
          }),
        ],
      }),
    ],
  });
  return element;
}
