import { Layout } from "@/layout/Layout";
import { OnBoardingPage } from "@/templates/onboarding/OnBoarding";
import { El } from "@/utils/create-element";

export function OnBoarding() {
    return El({
        element:'div',
        children:[Layout(OnBoardingPage())]
    })
}