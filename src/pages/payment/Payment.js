import { Layout } from "@/layout/Layout";
import { PaymentPage } from "@/templates/payment/Payment";
import { El } from "@/utils/create-element";

export function Payment() {
  return El({
    element: "div",
    children: [Layout(PaymentPage())],
  });
}
