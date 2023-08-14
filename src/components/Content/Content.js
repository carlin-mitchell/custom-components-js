// COMPONENT IMPORTS
import Element from "../Element";
import ComponentSection from "../ComponentSection/ComponentSection";
import NavBar from "../NavBar/NabBar";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = Element("div", { id: "content" });

  content.appendChild(ComponentSection("Navbar With Dropdown", NavBar(), true));
  content.appendChild(
    ComponentSection("Image Carousel", ImageCarousel(), true)
  );

  return content;
};

export default Content;
