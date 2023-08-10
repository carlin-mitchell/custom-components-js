// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";
import ExpandableNavLink from "./ExpandableNavLink";

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
    expandable: true,
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

const NavLinks = (isMobileMenu) => {
  isMobileMenu = isMobileMenu ? true : false;
  const navLinks = Element(
    "ul",
    {
      className: `container nav-links`,
    },
    // children
    linkElementInfo.map((obj) =>
      obj.expandable && !isMobileMenu ? ExpandableNavLink(obj) : NavLink(obj)
    )
  );
  return navLinks;
};

export default NavLinks;
