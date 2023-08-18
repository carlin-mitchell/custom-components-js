import Element from "../Element";
import { clickCarouselNav } from "./ui/carousel-ui";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = (imageData) => {
  const carouselNavIndicator = (imageId, startsActive) =>
    Element("button", {
      id: `carousel-nav-${imageId}`,
      className: `carousel-indicator display-i-b bg-gray-light-6 ${
        startsActive ? "active" : ""
      }`,
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
      ...imageData.map((obj, index) =>
        carouselNavIndicator(obj.uuid, obj.isActive ? true : false)
      ),
    ]
  );
  return navDiv;
};

export default CarouselNav;
