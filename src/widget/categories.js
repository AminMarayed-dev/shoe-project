import { Logo } from "@/components/logo/Logo";
import { El } from "@/utils/create-element";

export function CategoriesLogo() {
  return El({
    element: "div",
    className:'grid grid-cols-4 gap-4 w-full justify-center',
    children: [
      Logo({
        src: "./src/assets/images/nike.png",
      }),
      Logo({
        src: "./src/assets/images/addidas.png",
      }),
      Logo({
        src: "./src/assets/images/puma.png",
      }),
      Logo({
        src: "./src/assets/images/Asics.png",
      }),
      Logo({
        src: "./src/assets/images/Reebok.png",
      }),
      Logo({
        src: "./src/assets/images/New Balance.png",
      }),
      Logo({
        src: "./src/assets/images/Converse.png",
      }),
      Logo({
        src: "./src/assets/images/More.png",
      }),
    ],
  });
}
