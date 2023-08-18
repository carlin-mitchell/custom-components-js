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

const CarouselTrack = (imageIds) => {
  const carouselTrack = Element(
    "ul",
    {
      id: ``,
      className: `carousel-track`,
    },
    // children
    [
      CarouselSlide(Brick, imageIds[0]),
      CarouselSlide(PaintFace, imageIds[1]),
      CarouselSlide(Mac, imageIds[2]),
    ]
  );
  return carouselTrack;
};

export default CarouselTrack;
