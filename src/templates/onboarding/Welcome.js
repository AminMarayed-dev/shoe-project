import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { StartSlider} from "./Slider";

export function WelcomePage() {
  const element = El({
    element: "div",
    className:
      "hidden bg-[url('../../../src/assets/images/welcome.png')] w-full h-screen bg-no-repeat px-6 py-4 relative",
    id: "welcome",
    children: [
      El({
        element: "div",
        className: "flex flex-col gap-1 text-white absolute bottom-[60px]",
        children: [
          Text({ text: "Welcome to 👋", className: "text-[40px]" }),
          Text({ text: "Shoea", className: "text-[70px]" }),
          Text({
            text: "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
            className: "text-[16px]",
          }),
        ],
      }),
    ],
  });
  setTimeout(() => {
    document.getElementById("welcome").style.display = "none";
    document.getElementById('onboarding').append(StartSlider());
  }, 5000);
  return element;
}
