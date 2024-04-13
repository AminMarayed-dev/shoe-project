import { El } from "@/utils/create-element";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";

export function Score({score, className, ...rest}) {
    return El({
        element:'span',
        className:'flex gap-2',
        children:[
            Icon({className:'icon-[fluent--star-half-28-regular]', otherClass:'w-[30px] h-[30px]'}),
            Text({text: score})
        ]
    })
}
