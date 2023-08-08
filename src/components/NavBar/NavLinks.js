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
      className: `container nav-links`,
    },
    // children
    [
      NavLink("contact", "#"),
      NavLink("home", "#"),
      NavLink("about", "#"),
      NavLink("news", "#"),
      NavLink("pricing", "#"),
    ]
  );
  return navLinks;
};

export default NavLinks;
