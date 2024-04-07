import { El } from "@/utils/create-element";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/input/Input";

export function InputSearch() {
  return El({
    element: "div",
    children: [Icon({}), Input({ type: "text", placeholder: "search" })],
  });
}
