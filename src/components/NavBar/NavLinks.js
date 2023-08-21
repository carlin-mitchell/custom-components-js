// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";
import ExpandableNavLink from "./ExpandableNavLink";

// LOGIC IMPORTS
import { navLinkElementInfo } from "../../managers/dataManagers/navLinkData";
import MobileMenuAccordionLink from "./MobileMenuAccordionLink";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavLinks = (isMobileMenu) => {
  isMobileMenu = isMobileMenu ? true : false;
  const navLinks = Element(
    "ul",
    {
      className: `container nav-links text-uppercase`,
    },
    // children
    navLinkElementInfo.map((obj) => {
      if (obj.subLinkObjects) {
        if (isMobileMenu) {
          return MobileMenuAccordionLink(obj);
        } else {
          return ExpandableNavLink(obj);
        }
      } else {
        return NavLink(obj);
      }
    })
  );
  return navLinks;
};

export default NavLinks;
