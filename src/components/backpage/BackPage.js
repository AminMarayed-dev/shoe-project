
import { El } from "@/utils/create-element";
import { Icon } from "../icon/Icon";
import { Text } from "../text/Text";
import { router } from "@/routes/routes";

export function BackPage({title}) {
    return El({
        element:'div',
        className:'flex items-center gap-2 mt-2',
        children:[
            Icon({className:'icon-[uil--arrow-left] text-[32px] cursor-pointer', eventListener:[{
                event:'click',
                callback: () => {
                    router.navigate('/');
                }
            }]}),
            Text({text: title, className:'font-bold'})
        ],
    })
}
