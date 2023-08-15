// COMPONENT IMPORTS
import Element from "../Element";
import CarouselSlide from "./CarouselSlide";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrack = () => {
  const carouselTrack = Element(
    "ul",
    {
      id: ``,
      className: `carousel-track`,
    },
    // children
    [CarouselSlide()]
  );
  return carouselTrack;
};

export default CarouselTrack;
