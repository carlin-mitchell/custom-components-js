// COMPONENT IMPORTS
import Element from "../Element";
import CarouselSlide from "./CarouselSlide";

import Brick from "./assets/brick.png";
import PaintFace from "./assets/paint-face.png";
import Mac from "./assets/mac.png";

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
    [CarouselSlide(Brick)]
  );
  return carouselTrack;
};

export default CarouselTrack;
