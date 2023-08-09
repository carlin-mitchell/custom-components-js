// COMPONENT IMPORTS
import Element from "../Element";
import NavLinks from "./NavLinks";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MobileMenu = () => {
  const menu = Element(
    "div",
    {
      id: ``,
      className: `mobile-menu`,
    },
    // children
    [NavLinks()]
  );
  return menu;
};

export default MobileMenu;
