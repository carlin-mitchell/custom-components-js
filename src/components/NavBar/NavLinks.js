// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const linkElementInfo = [
  {
    innerText: "contact",
    href: "#",
  },
  {
    innerText: "about",
    href: "#",
  },
  {
    innerText: "pricing",
    href: "#",
  },
  {
    innerText: "links",
    href: "#",
  },
  {
    innerText: "events",
    href: "#",
  },
];

const NavLinks = () => {
  const navLinks = Element(
    "ul",
    {
      className: `container nav-links`,
    },
    // children
    linkElementInfo.map((obj) => NavLink(obj))
  );
  return navLinks;
};

export default NavLinks;
