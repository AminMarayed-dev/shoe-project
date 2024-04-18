import { Layout } from "@/layout/Layout";
import { WelcomePage } from "@/templates/onboarding/Welcome";
import { El } from "@/utils/create-element";


export function welcome() {
    return El({
        element:'div',
        children:[Layout(WelcomePage())]
    })
}