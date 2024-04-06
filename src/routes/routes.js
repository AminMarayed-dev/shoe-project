import Navigo from "navigo";
import { changePage } from "@/utils/change-page";
import { Slides } from "@/pages/onboarding/slides/Slides";
import { Home } from "@/pages/home/Home";
import { Orders } from "@/pages/orders/Orders";
import { Cart } from "@/pages/cart/Cart";
import { Search } from "@/pages/search/Search";
import { CheckOut } from "@/pages/checkout/CheckOut";
import { Login } from "@/pages/login/Login";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(Slides);
  })
  .on("/home", () => {
    changePage(Home);
  })
  .on("/orders", () => {
    changePage(Orders);
  })
  .on("/search", () => {
    changePage(Search);
  })
  .on("/cart", () => {
    changePage(Cart);
  })
  .on("/checkout", () => {
    changePage(CheckOut);
  })
  .on("/login", () => {
    changePage(Login);
  });
