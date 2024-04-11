import Navigo from "navigo";
import { changePage } from "@/utils/change-page";
import { Slides } from "@/pages/onboarding/slides/Slides";
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

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(Home());
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
  .on("/login", () => {
    changePage(Login());
  })
  .on("/most-popular", () => {
    changePage(MostPopular());
  })
  .on("/wishlist", () => {
    changePage(WishList());
  })
  .on("/products/:id", ({ data }) => {
    // console.log(data);
    getProductsById(data.id).then((response) => {
      // console.log(response);
      changePage(SingleProduct(response));
    });
  })
  .on("/brand/:brand", ({ data }) => {
    // console.log(data);
    getProductsByFilter("brand", data.brand.toUpperCase()).then((response) => {
      // console.log(response);
      changePage(Brand(response));
    });
  });
