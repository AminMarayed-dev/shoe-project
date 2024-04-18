import { Icon } from "@/components/icon/Icon";
import { Input } from "@/components/input/Input";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";

export function DiscountCodeCheckout() {
    return El({
        element:'div',
        className:'flex flex-col mt-6 gap-3',
        children:[
            Text({text:'Promo Code', className:'font-bold'}),
            El({
                element:'div',
                className:'flex items-center gap-2 w-full',
                children:[
                    Input({type:'text', placeholder:"Enter Promo Code",className:'py-2 px-3 w-full bg-gray-200'}),
                    Icon({className:'icon-[ant-design--plus-circle-filled]', otherClass:'text-5xl cursor-pointer'})
                ]
            })
        ]
    })
}
