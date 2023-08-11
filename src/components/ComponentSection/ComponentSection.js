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

  component = Element("div", { className: `component-body` }, [component]);

  const hrDiv = Element(
    "div",
    {
      className: `p-1 hr-div `,
    },
    [Element("hr")]
  );

  const section = Element("div", {
    className: `component-section`,
  });
  section.appendChild(header);

  if (component) {
    section.appendChild(component);
  }
  if (addHr) {
    component.appendChild(hrDiv);
  }
  return section;
};

export default Component;
