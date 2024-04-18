import { El } from "@/utils/create-element";

import { WelcomePage } from "./Welcome";
import { LoadingPage } from "./Loading";

export function OnBoardingPage() {
  return El({
    element: "div",
    className:'flex',
    id:'onboarding',
    children: [LoadingPage(), WelcomePage()],
  });
}
