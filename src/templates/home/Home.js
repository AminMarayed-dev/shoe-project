import { Icon } from "@/components/icon/Icon";
import { Input } from "@/components/input/Input";
import { InputSearch } from "@/widget/input-search";
import { Footer } from "@/layout/footer/Footer";
import { El } from "@/utils/create-element";
import { CategoriesLogo } from "@/widget/categories";
import { Header } from "@/layout/header/Header";
import { filterCategories } from "@/widget/filter-categories";
import { SomePopularProducts } from "@/widget/some-popular-products";

export function HomePage() {
  return El({
    element: "div",
    children: [Header(),InputSearch(),CategoriesLogo(),SomePopularProducts(), Footer()],
  });
}
