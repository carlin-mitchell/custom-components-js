// COMPONENT IMPORTS
import Element from "../Element";
import LeftCarouselButton from "./LeftButton";
import RightCarouselButton from "./RightButton";
import CarouselTrackContainer from "./CarouselTrackContainer";
import CarouselNav from "./CarouselNav";
import { v4 as uuidv4 } from "uuid";

import { imageData } from "./data/imageLoader";

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

  const imageIds = Array(4)
    .fill(null)
    .map((elem) => uuidv4());

  const carousel = Element(
    "div",
    {
      id: ``,
      className: `carousel pt-1 pb-1`,
    },
    // children
    [
      leftButton,
      CarouselTrackContainer(imageData),
      rightButton,
      CarouselNav(imageData),
    ]
  );
  return carousel;
};

export default ImageCarousel;
