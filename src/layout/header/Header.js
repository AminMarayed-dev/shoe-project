import { Icon } from "@/components/icon/Icon";
import { El } from "@/utils/create-element";

export function Header() {
    return El({
        element:'div',
        className:'flex justify-between',
        children:[
            El({
                element:'span',
                className:'flex',
                children:[
                    El({
                        element:'img',
                        alt:'header_img'
                    }),
                    El({
                        element:'span',
                        children:[
                            El({
                                element:'p',
                                innerText:'Good Morning 👋'
                            }),
                            El({
                                element:'p',
                                innerText:'Saeed Abdilar'
                            })
                        ]
                    })
                ]
            }),
            El({
                element:'span',
                children:[Icon({}), Icon({})]
            })
        ]
    })
}