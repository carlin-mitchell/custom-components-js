// COMPONENT IMPORTS
import Element from "../Element";
import NavLink from "./NavLink";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandableNavLink = (props) => {
  const { innerText } = props;
  const { href } = props;
  const a = (innerText, href, className) =>
    Element("a", { innerText, href, className: `` });

  const additionalLinks = Element("ul", {}, [
    NavLink({ innerText: "sub-link-1" }),
  ]);
  const expandableNavLink = Element(
    "li",
    {
      id: ``,
      className: `bg-primary-light-1 p-1 text-uppercase bg-hover-primary-dark-2 cursor-pointer mr-1 expandable-nav-link`,
    },
    // children
    [a(innerText, href), additionalLinks]
  );
  return expandableNavLink;
};

export default ExpandableNavLink;
