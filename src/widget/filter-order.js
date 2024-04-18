import { Button } from "@/components/button/Button";
import { El } from "@/utils/create-element";

export function FilterPayment() {
    return El({
        element:'div',
        className:'flex items-center',
        children:[
            Button({text:'Active',className:'border-b-2 pb-3 w-full border-b-black font-bold'}),
            Button({text:'Completed', className:'border-b-2 pb-3 w-full '})
        ]
    })
}