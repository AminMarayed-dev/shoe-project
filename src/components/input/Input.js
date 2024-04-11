import { El } from "@/utils/create-element";

export function Input({type, placeholder= "", className= "", ...rest}) {
    return El({
        element:'input',
        type,
        className:`outline-none ${className}`,
        placeholder,
        ...rest
    })
}