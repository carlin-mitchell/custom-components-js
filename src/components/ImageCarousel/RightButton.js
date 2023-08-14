// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = () => {
  const icon = Icon("icon-up-arrow rotate-90");

  const button = Element(
    "button",
    {
      id: ``,
      className: `carousel-button`,
    },
    // children
    [icon]
  );
  return button;
};

export default RightCarouselButton;
