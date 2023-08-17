// COMPONENT IMPORTS
import Element from "../Element";
import LeftCarouselButton from "./LeftButton";
import RightCarouselButton from "./RightButton";
import CarouselTrackContainer from "./CarouselTrackContainer";
import CarouselNav from "./CarouselNav";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const sharedButtonClasses = "bg-transparent border-none p-1";
  const leftButton = LeftCarouselButton(sharedButtonClasses);
  const rightButton = RightCarouselButton(sharedButtonClasses);

  const carousel = Element(
    "div",
    {
      id: ``,
      className: `carousel pt-1 pb-1`,
    },
    // children
    [leftButton, CarouselTrackContainer(), rightButton, CarouselNav()]
  );
  return carousel;
};

export default ImageCarousel;
