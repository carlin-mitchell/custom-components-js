// COMPONENT IMPORTS
import Element from "../Element";
import CarouselTrack from "./CarouselTrack";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrackContainer = () => {
  const container = Element(
    "div",
    {
      id: ``,
      className: `carousel-track-container`,
    },
    // children
    [CarouselTrack()]
  );
  return container;
};

export default CarouselTrackContainer;
