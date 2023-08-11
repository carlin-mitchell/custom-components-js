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

  content.appendChild(ComponentSection("Navbar With Dropdown", NavBar(), true));

  return content;
};

export default Content;
