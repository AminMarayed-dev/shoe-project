import { getProducts } from "@/api/Products";
import { Link } from "@/components/link/Link";
import { Logo } from "@/components/logo/Logo";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";

export function CategoriesLogo() {
  // const {brand} = {...new Set(filterProduct)};
  // console.log(brand);
  return El({
    element: "div",
    className: "grid grid-cols-4 gap-4 w-full",
    children: [
      Link({
        href: `/brand/NIKE`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--nike]",
          }),
        ],
      }),
      Link({
        href: `/brand/ADIDAS`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[gg--adidas]",
          }),
        ],
      }),
      Link({
        href: `/brand/PUMA`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--puma]",
          }),
        ],
      }),
      Link({
        href: `/brand/ASICS`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--nike]",
          }),
        ],
      }),
      Link({
        href: `/brand/REEBOK`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--reebok]",
          }),
        ],
      }),
      Link({
        href: `/brand/NEW BALANCE`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--newbalance]",
          }),
        ],
      }),
      Link({
        href: `/brand/CONVERSE`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[simple-icons--nike]",
          }),
        ],
      }),
      Link({
        href: `/brand/OTHER`,
        className: "text-center",
        children: [
          Logo({
            logoClass: "icon-[mdi--more-circle-outline]",
          }),
        ],
      }),
      // Logo({
      //   src: "./src/assets/images/addidas.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/puma.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/Asics.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/Reebok.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/New Balance.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/Converse.png",
      // }),
      // Logo({
      //   src: "./src/assets/images/More.png",
      // }),
    ],
  });
}
