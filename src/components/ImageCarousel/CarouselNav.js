import Element from "../Element";
import { getNumImages } from "../managers/dataManagers/carouselData";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = () => {
  const carouselNavIndicator = () =>
    Element("button", {
      className: "carousel-indicator display-i-b bg-gray-light-6",
    });

  const navDiv = Element(
    "div",
    {
      id: ``,
      className: `carousel-nav pt-1`,
    },
    // children
    [carouselNavIndicator(), carouselNavIndicator(), carouselNavIndicator()]
  );
  return navDiv;
};

export default CarouselNav;
