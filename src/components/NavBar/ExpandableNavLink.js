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
    Element("a", {
      innerText,
      href,
      className: `${className ? className : ""}`,
    });

  const button = Element(
    "button",
    {
      innerText: "Contact",
      className: "p-1 bg-transparent text-white border-none text-uppercase ",
    },
    []
  );

  const dropDownContent = Element(
    "div",
    { className: "dropdown-content" },
    //children
    [a("Link 1", "#"), a("Link 2", "#"), a("Link 3", "#"), a("Link 4", "#")]
  );

  const expandableNavLink = Element(
    "div",
    {
      className:
        "dropdown" +
        " " +
        "bg-primary-light-1 text-uppercase bg-hover-primary-dark-2 cursor-pointer mr-1",
    },
    //children
    [button, dropDownContent]
  );

  return expandableNavLink;
};

export default ExpandableNavLink;
