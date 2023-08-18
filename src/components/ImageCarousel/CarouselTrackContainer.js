// COMPONENT IMPORTS
import Element from "../Element";
import CarouselTrack from "./CarouselTrack";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrackContainer = (imageData) => {
  const container = Element(
    "div",
    {
      id: ``,
      className: `carousel-track-container`,
    },
    // children
    [CarouselTrack(imageData)]
  );
  return container;
};

export default CarouselTrackContainer;
