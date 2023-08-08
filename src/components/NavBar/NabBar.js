// COMPONENT IMPORTS
import Element from "../Element";
import NavLinks from "./NavLinks";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NavBar = () => {
  const siteHeader = Element("h2", {
    className: "text-lg",
    innerText: "Navbar.com",
  });

  const tagline = Element("p", {
    className: ``,
    innerText: "I made this myself",
  });

  const Container = (props, children) =>
    Element(
      "div",
     {className: },
      // container children
      [...children]
    );

  const nav = Element(
    "nav",
    {
      className: `container bg-primary text-white pt-1 pl-1 pr-1 flex-column`,
    },
    // nav children
    [Container([siteHeader, tagline]), Container([NavLinks()])]
  );

  return nav;
};

export default NavBar;
