// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = (iconClass) => {
  const icon = Element("i", { className: `icon ${iconClass}` });
  return icon;
};

export default Icon;
