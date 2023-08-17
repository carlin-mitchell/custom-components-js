import Element from "../Element";
import { getNumImages } from "../managers/dataManagers/carouselData";
import { displayCarouselImage } from "../managers/uiManager/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = () => {
  const carouselNavIndicator = (id) =>
    Element("button", {
      className: "carousel-indicator display-i-b bg-gray-light-6",
      onclick: function () {
        displayCarouselImage(id);
      },
    });

  const navDiv = Element(
    "div",
    {
      id: ``,
      className: `carousel-nav pt-1`,
    },
    // children
    [carouselNavIndicator(0), carouselNavIndicator(1), carouselNavIndicator(2)]
  );
  return navDiv;
};

export default CarouselNav;
