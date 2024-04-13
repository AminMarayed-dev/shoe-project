import { El } from "@/utils/create-element";

export function Badge({text, className, ...rest}) {
    return El({
        element:'span',
        className:'rounded-lg bg-gray-200 p-1',
        innerText: text,
        ...rest
    })
}