import { El } from "@/utils/create-element";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/input/Input";

export function InputSearch() {
  return El({
    element: "div",
    className:'relative px-2',
    children: [
      Icon({ className: "icon-[ic--round-search]", otherClass:'absolute top-2 left-4 text-lg bg-gray-400' }),
      Input({ type: "text", placeholder: "search", className:'bg-gray-100 px-7 py-1 w-full' }),
    ],
  });
}
