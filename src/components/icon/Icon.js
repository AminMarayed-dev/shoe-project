import { El } from "@/utils/create-element";

export function Icon({className = "", otherClass = ""}) {
    return El({
        element:'span',
        className:`${className} ${otherClass}`
    })
}

