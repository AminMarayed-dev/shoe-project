import { Layout } from "@/layout/Layout";
import { LoadingPage } from "@/templates/onboarding/Loading";
import { El } from "@/utils/create-element";

export function Loading() {
    return El({
        element:'div',
        children:[Layout(LoadingPage())]
    })
}