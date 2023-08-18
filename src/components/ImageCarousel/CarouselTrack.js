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

const CarouselTrack = (imageData) => {
  const carouselTrack = Element(
    "ul",
    {
      id: ``,
      className: `carousel-track`,
    },
    // children
    [
      ...imageData.map((obj, index) =>
        CarouselSlide(obj.src, obj.uuid, obj.isActive ? true : false)
      ),
    ]
  );
  return carouselTrack;
};

export default CarouselTrack;
