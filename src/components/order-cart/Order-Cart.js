export function OrderCart({ orders , className, ...rest}) {
    const { id, name, price, imageURL } = orders;
    return Link({
      href:`/products/${id}`,
      className: "flex flex-col",
      children: [
        Image({ src: imageURL, className: "rounded-2xl cursor-pointer h-[160px] mt-3 mb-1"}),
        Text({
          text: name.length < 15 ? name : name.substring(0, 15) + "...",
          className: "font-bold",
        }),
        Text({ text: `$ ${price}` }),
      ],
    });
  }