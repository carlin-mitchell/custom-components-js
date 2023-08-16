// COMPONENT IMPORTS
import Element from "../Element";
import LeftCarouselButton from "./LeftButton";
import RightCarouselButton from "./RightButton";
import CarouselTrackContainer from "./CarouselTrackContainer";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const sharedButtonClasses = "bg-transparent bg-hover-gray-light-9";
  const leftButton = LeftCarouselButton(sharedButtonClasses);
  const rightButton = RightCarouselButton(sharedButtonClasses);

  const carousel = Element(
    "div",
    {
      id: ``,
      className: `carousel`,
    },
    // children
    [leftButton, CarouselTrackContainer(), rightButton]
  );
  return carousel;
};

export default ImageCarousel;
