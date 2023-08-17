// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Image = (src) => {
  const img = Element("img", {
    src,
  });
  return img;
};

export default Image;
