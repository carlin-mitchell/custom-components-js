// COMPONENT IMPORTS
import Element from "../Element";
import Image from "../base-elements/Image";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselSlide = (imageSource) => {
  const slide = Element(
    "div",
    {
      id: ``,
      className: `carousel-slide`,
    },
    // children
    [Image(imageSource)]
  );
  return slide;
};

export default CarouselSlide;
