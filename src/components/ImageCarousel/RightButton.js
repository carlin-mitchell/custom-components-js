// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = (sharedClasses) => {
  const icon = Icon("icon-up-arrow rotate-90");

  const button = Element(
    "button",
    {
      id: ``,
      className: `carousel-button right ` + sharedClasses,
    },
    // children
    [icon]
  );
  return button;
};

export default RightCarouselButton;
