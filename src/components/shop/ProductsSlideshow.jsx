import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import style from "./Products.module.css";

const items = [
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/Screen_Shot_2018-04-11_at_2.22.53_PM_970x.png?v=1523481803",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/MACA_White_Shirt_2_970x.jpg?v=1523481264",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/MACA_Shirt_2_970x.jpg?v=1523481370",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/MACA_Shirts_970x.jpg?v=1523481394",
    altText: "Slide 4",
    caption: "Slide 4",
    header: "Slide 4 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/Screen_Shot_2018-04-11_at_2.18.20_PM_970x.png?v=1523481516",
    altText: "Slide 5",
    caption: "Slide 5",
    header: "Slide 5 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/2997/7822/files/Screen_Shot_2018-04-11_at_2.19.31_PM_970x.png?v=1523481588",
    altText: "Slide 6",
    caption: "Slide 6",
    header: "Slide 6 Header"
  }
];

const ProductSlideshow = () => (
  <UncontrolledCarousel items={items} className={style.slideshow} />
);

export default ProductSlideshow;
