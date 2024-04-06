import { Layout } from "@/layout/Layout";
import { HomePage } from "@/templates/home/Home";
import { El } from "@/utils/create-element";

export function Home() {
    return El({
        element:'div',
        children:[Layout(HomePage())]
    })
}