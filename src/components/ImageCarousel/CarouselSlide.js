// COMPONENT IMPORTS
import Element from "../Element";
import Image from "../base-elements/Image";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselSlide = (imageSource, id) => {
  const carouselImage = Element("img", {
    src: imageSource,
    className: "carousel-image",
  });

  const slide = Element(
    "div",
    {
      id: `carousel-slide-` + id,
      className: `carousel-slide`,
    },
    // children
    [carouselImage]
  );
  return slide;
};

export default CarouselSlide;
