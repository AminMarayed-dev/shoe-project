import { El } from "@/utils/create-element";

export function Logo({ src = "", className }) {
  return El({
    element:'span',
    className:'cursor-pointer flex justify-center',
    children: [
      El({
        element: "img",
        src,
        className:'w-[30px] h-[30px]',
      }),
    ],
  });
}
