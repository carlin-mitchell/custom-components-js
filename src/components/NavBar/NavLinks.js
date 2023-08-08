// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavLinks = () => {
  const navLinks = Element(
    "ul",
    {
      className: ``,
    },
    // children
    [NavLink("contact", "#")]
  );
  return navLinks;
};

export default NavLinks;
