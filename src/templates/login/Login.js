import { getPersonData } from "@/api/Login";
import { BackPage } from "@/components/backpage/BackPage";
import { Button } from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import { Input } from "@/components/input/Input";
import { Text } from "@/components/text/Text";
import { El } from "@/utils/create-element";
import { router } from "@/routes/routes";

export function LoginPage() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const element = El({
    element: "div",
    className: " flex flex-col px-4 py-1 h-screen relative",
    children: [
      BackPage({ title: "" }),
      El({
        element: "div",
        className: "flex flex-col items-center",
        children: [
          Image({
            src: "../../../src/assets/images/logo-login.svg",
            className: "w-[54px] h-[81px] mt-20 mb-20",
          }),
          Text({
            text: "Login to Your Account",
            className: "font-bold text-[32px] mb-14",
          }),
          El({
            element: "div",
            className: "flex relative w-full",
            children: [
              Image({
                src: "../../../src/assets/images/sms-input.svg",
                className: "absolute top-[8px] left-[10px]",
              }),
              Input({
                type: "text",
                placeholder: "username",
                id: "user",
                className:
                  "w-full mb-4 rounded-[4px] bg-gray-100 px-8 py-1 focus:ring-2 focus:ring-[#212529]",
                value: userData.userName || "",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex relative w-full",
            children: [
              Image({
                src: "../../../src/assets/images/lock-fill.svg",
                className: "absolute top-[8px] left-[10px]",
              }),
              Input({
                type: "password",
                placeholder: "password",
                id: "pass",
                className:
                  "w-full mb-4 rounded-[4px] bg-gray-100 px-8 py-1 focus:ring-2 focus:ring-[#212529]",
                value: userData.password || "",
              }),
              Image({
                src: "../../../src/assets/images/eye-close.svg",
                className: "absolute top-[8px] right-[10px]",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex items-center gap-2 mt-4",
            children: [
              Input({
                type: "checkbox",
                id: "remember-me",
                className: "accent-[#212529] w-[16px] h-[24px]",
                eventListener: [
                  {
                    event: "change",
                    callback: (e) => {
                      if (e.target.checked) {
                        let userNameValue =
                          document.getElementById("user").value;
                        let passwordValue =
                          document.getElementById("pass").value;
                        if (userNameValue && passwordValue) {
                          const userData = {
                            userName: userNameValue,
                            password: passwordValue,
                            isChecked: e.target.value,
                          };
                          localStorage.setItem(
                            "userData",
                            JSON.stringify(userData)
                          );
                        }
                      }
                    },
                  },
                ],
              }),
              El({
                element: "label",
                id: "remember-me",
                innerText: "Remember me",
              }),
            ],
          }),
        ],
      }),
      Button({
        text: "sign in",
        className:
          " mt-[320px]    bg-[#212529] text-white py-[12px] px-[16px] rounded-[30px] w-full",
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

                if (userName == userNameValue && password == passwordValue) {
                  router.navigate("/home");
                } else {
                  alert("username or password not correct");
                  document.getElementById("user").value = "";
                  document.getElementById("pass").value = "";
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
