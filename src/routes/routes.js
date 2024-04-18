import Navigo from "navigo";
import { changePage } from "@/utils/change-page";
import { Home } from "@/pages/home/Home";
import { Orders } from "@/pages/orders/Orders";
import { Cart } from "@/pages/cart/Cart";
import { Search } from "@/pages/search/Search";
import { CheckOut } from "@/pages/checkout/CheckOut";
import { Login } from "@/pages/login/Login";
import { WishList } from "@/pages/wishlist/WishList";
import { MostPopular } from "@/pages/most-popular/Most-Popular";
import {
  getProducts,
  getProductsByFilter,
  getProductsById,
} from "@/api/Products";
import { SingleProduct } from "@/pages/single-product/Single_Product";
import { Brand } from "@/pages/brand/Brand";
import { OnBoarding } from "@/pages/onboarding/OnBoarding";
import { ShoppingAdress } from "@/pages/shopping-address/Shopping-Address";
import { ChooseShopping } from "@/pages/choose-shopping.js/Choose-Shopping";
import { Payment } from "@/pages/payment/Payment";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnBoarding());
  })
  .on("/login", () => {
    changePage(Login());
  })
  .on("/home", () => {
    changePage(Home());
  })
  .on("/orders", () => {
    changePage(Orders());
  })
  .on("/search", () => {
    changePage(Search());
  })
  .on("/cart", () => {
    changePage(Cart());
  })
  .on("/checkout", () => {
    changePage(CheckOut());
  })
  .on("/most-popular", () => {
    changePage(MostPopular());
  })
  .on("/wishlist", () => {
    changePage(WishList());
  })
  .on("/shopping-address", () => {
    changePage(ShoppingAdress());
  })
  .on("/choose-shopping", () => {
    changePage(ChooseShopping());
  })
  .on('/payment', () => {
    changePage(Payment());
  })
  .on("/products/:id", ({ data }) => {
    getProductsById(data.id).then((response) => {
      changePage(SingleProduct(response));
    });
  })
  .on("/brand/:brand", ({ data }) => {
    getProductsByFilter("brand", data.brand.toUpperCase()).then((response) => {
      changePage(Brand(response));
    });
  });
