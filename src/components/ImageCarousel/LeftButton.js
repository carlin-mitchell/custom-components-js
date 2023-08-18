// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
import { clickCarouselLeft } from "./ui/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const LeftCarouselButton = (sharedClasses) => {
  const icon = Icon("icon-up-arrow rotate-270 ");

  const button = Element(
    "button",
    {
      id: ``,
      className: `carousel-button left ` + sharedClasses,
      onclick() {
        clickCarouselLeft();
      },
    },
    // children
    [icon]
  );
  return button;
};

export default LeftCarouselButton;
