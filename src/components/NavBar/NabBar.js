// COMPONENT IMPORTS
import Element from "../Element";

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

  const container = Element(
    "div",
    {
      className: `container`,
    },
    // container children
    [siteHeader]
  );

  const nav = Element(
    "nav",
    {
      className: `container bg-primary text-white p-1`,
    },
    // children
    [container]
  );

  return nav;
};

export default NavBar;
