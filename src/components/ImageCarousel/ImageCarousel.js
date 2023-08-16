// COMPONENT IMPORTS
import Element from "../Element";
import LeftCarouselButton from "./LeftButton";
import Icon from "../base-elements/Icon";
import RightCarouselButton from "./RightButton";
import CarouselTrackContainer from "./CarouselTrackContainer";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const leftButton = LeftCarouselButton();
  const rightButton = RightCarouselButton();

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
