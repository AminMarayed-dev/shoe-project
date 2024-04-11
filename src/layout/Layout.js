import { El } from "@/utils/create-element";

export function Layout(main) {
    return El({
        element:'div',
        children:[main]
    })
}