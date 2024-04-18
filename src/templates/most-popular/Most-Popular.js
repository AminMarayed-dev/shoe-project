import { getProducts } from "@/api/Products";
import { BackPage } from "@/components/backpage/BackPage";
import { Card } from "@/components/card/Card";
import { CartProducts } from "@/components/cart-products/Cart-Products";
import { El } from "@/utils/create-element";
import { filterCategoriesBtn } from "@/widget/filter-categories-button";

const allProducts = await getProducts("", 0);
export function MostPopularPage() {
  
  const element =  El({
    element: "div",
    className: "px-5 flex flex-col gap-3",
    children: [
      BackPage({ title: "Most Popular" }),
      filterCategoriesBtn({parentId:'some-products', child:allProducts}),
      CartProducts({ products: allProducts }),
    ],
  });
  return element;
}
