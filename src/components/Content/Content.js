// COMPONENT IMPORTS
import Element from "../Element";
import TestHeader from "../TestHeader/TestHeader";
import ComponentSection from "../ComponentSection/ComponentSection";
import NavBar from "../NavBar/NabBar";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = Element("div", { id: "content" });
  const i = Element("i", {
    className: "icon icon-github-mark text-red font-xl ",
  });
  content.appendChild(ComponentSection("Navbar With Dropdown", NavBar(), true));
  content.appendChild(i);
  return content;
};

export default Content;
