import { getPersonData } from "@/api/Login";
import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import { Home } from "@/pages/home/Home";
import { changePage } from "@/utils/change-page";
import { El } from "@/utils/create-element";

export function LoginPage() {
  const element = El({
    element: "div",
    children: [
      Input({ type: "text", placeholder: "username", id: "user" }),
      Input({ type: "password", placeholder: "password", id: "pass" }),
      Button({
        text: "sign in",
        className: "bg-gray-700",
        eventListener: [
          {
            event: "click",
            callback: () => {
              let userNameValue = document.getElementById("user").value;
              let passwordValue = document.getElementById("pass").value;

              getPersonData().then((data) => {
                if (userNameValue === "" && passwordValue === "") {
                  alert("empty field");
                  return;
                }

                const [userName] = data.map((d) => d.name);
                const [password] = data.map((d) => d.password);

                if (userName == userNameValue && password == passwordValue)
                  changePage(Home);
                else {
                    alert('username or password not correct');
                }
              });
            },
          },
        ],
      }),
    ],
  });
  return element;
}
