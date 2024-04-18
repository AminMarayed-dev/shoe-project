import { El } from "@/utils/create-element";

export function Badge({text, className, ...rest}) {
    return El({
        element:'span',
        className:'rounded-lg bg-gray-100 px-2 py-1 text-sm',
        innerText: text,
        ...rest
    })
}