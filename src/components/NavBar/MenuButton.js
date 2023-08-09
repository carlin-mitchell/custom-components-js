// COMPONENT IMPORTS
import Element from "../Element";
import MenuIcon from "../Assets/menu-white.svg";
// LOGIC IMPORTS

import ui from "../managers/uiManager";

// COMPONENT METHODS
function someMethod() {
  ui.toggleMobileMenu();
}

const MenuContainer = () => {
  const menuIcon = Element("img", {
    src: MenuIcon,
  });

  const menuButton = Element(
    "button",
    {
      className: `menu-button m-1 btn bg-transparent border-none`,
      onclick: someMethod,
    },
    //   children
    [menuIcon]
  );

  const container = Element(
    "div",
    {
      className: `container`,
    },
    // children
    [menuButton]
  );
  return container;
};

export default MenuContainer;
