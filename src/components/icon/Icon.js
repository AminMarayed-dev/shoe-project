import { El } from "@/utils/create-element";

export function Icon({className = "", otherClass = "", ...rest}) {
    return El({
        element:'span',
        className:`${className} ${otherClass}`,
        ...rest
    })
}

