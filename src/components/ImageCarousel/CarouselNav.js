import Element from "../Element";
import { clickCarouselNav } from "../managers/uiManager/carousel-ui";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = (imageIds) => {
  const carouselNavIndicator = (imageId) =>
    Element("button", {
      id: `carousel-nav-${imageId}`,
      className: "carousel-indicator display-i-b bg-gray-light-6",
      onclick: function () {
        clickCarouselNav(imageId);
      },
    });

  const navDiv = Element(
    "div",
    {
      id: ``,
      className: `carousel-nav pt-1`,
    },
    // children
    [
      carouselNavIndicator(imageIds[0]),
      carouselNavIndicator(imageIds[1]),
      carouselNavIndicator(imageIds[2]),
    ]
  );
  return navDiv;
};

export default CarouselNav;
