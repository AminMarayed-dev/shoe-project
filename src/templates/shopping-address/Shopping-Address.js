import { BackPage } from "@/components/backpage/BackPage";
import { Button } from "@/components/button/Button";
import { Icon } from "@/components/icon/Icon";
import { Location } from "@/components/location/Location";
import { Text } from "@/components/text/Text";
import { router } from "@/routes/routes";
import { El } from "@/utils/create-element";
import { CheckoutShoppingAddress } from "@/widget/checkout-shopping-address";



export function ShoppingAddressPage() {
    return El({
        element:'div',
        className:'bg-gray-100 h-screen px-6 flex flex-col gap-4',
        children:[
            BackPage({title:'Shopping Address'}),
            Location({address:'61480 jkjkjnk jljljx', location:'home', value:'Home', checked:true}),
            Location({address:'fdsfsdfsdfsdfsfdsd', location:'Office',value: 'Office'}),
            Location({address:'slkdfjsldksdfsdjflsjd', location:'Apartment', value:'Apartment'}),
            Location({address:'slkdfjsldkjfsfdsdfdlsjd', location:'Parent', value:'Parent'}),
            Button({text:'Apply', className:"w-full bg-black p-4 text-white rounded-full mt-12", eventListener:[
                {
                    event:'click',
                    callback:(e) => {
                        const parent = e.target.parentElement;
                        const selectedRadio = [...parent.querySelectorAll('input')].find(radio => radio.checked);
                        router.navigate('/checkout');
                        
                        document.getElementById('location').innerText = selectedRadio.value;
                        document.getElementById('address').innerText = selectedRadio.id; 
                    }
                }
            ]})
        ]
    })
}