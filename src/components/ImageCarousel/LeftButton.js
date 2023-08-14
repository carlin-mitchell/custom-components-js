// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const LeftCarouselButton = () => {
  const icon = Icon("icon-up-arrow rotate-270");

  const button = Element(
    "button",
    {
      id: ``,
      className: `carousel-button display-i-b p-1`,
    },
    // children
    [icon]
  );
  return button;
};

export default LeftCarouselButton;
