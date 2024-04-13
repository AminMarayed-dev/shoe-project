import { El } from "@/utils/create-element";

export function BackDrop() {
    return El({
        element:'div',
        className:'backdrop-blur-sm w-screen h-screen fixed top-0',
        id:'backdrop',
        eventListener:[
            {
                event:'click',
                callback: (e) => {
                    // close backdrop
                    e.target.classList.add('hidden');
                    // close modal
                    e.target.previousElementSibling.classList.add('hidden');
                }
            }
        ]
    })
}