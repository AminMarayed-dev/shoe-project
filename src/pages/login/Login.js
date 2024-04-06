import { Layout } from "@/layout/Layout";
import { LoginPage } from "@/templates/login/Login";
import { El } from "@/utils/create-element";


export function Login() {
    return El({
        element:'div',
        children:[Layout(LoginPage())]
    })
}