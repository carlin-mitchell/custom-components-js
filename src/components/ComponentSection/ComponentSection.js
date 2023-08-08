// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Component = (headerText, component, addHr = false) => {
  const header = Element("h2", {
    className: `mb-2`,
    innerText: headerText,
  });

  const hr = Element("hr", {
    className: `m-1`,
  });

  const section = Element("div", {});
  section.appendChild(header);

  if (component) {
    section.appendChild(component);
  }
  if (addHr) {
    section.appendChild(hr);
  }
  return section;
};

export default Component;
