import { El } from "@/utils/create-element";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";

export function Payment({ classIcon, type, checked, ...rest }) {
  return El({
    element: "label",
    className:
      "px-6 flex items-center justify-between mt-4 py-4  bg-white rounded-xl",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          Icon({
            className: classIcon,
            otherClass: "text-2xl",
          }),
          Text({ text: type }),
        ],
      }),
      El({
        element: "input",
        type: "radio",
        className: "peer accent-black",
        checked,
        eventListener: [
          {
            event: "click",
            callback: (e) => {},
          },
        ],
      }),
    ],
  });
}
