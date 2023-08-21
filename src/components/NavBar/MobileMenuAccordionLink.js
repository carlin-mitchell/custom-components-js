// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../base-elements/Icon";
import { v4 as uuidv4 } from "uuid";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MobileMenuAccordionLink = (props) => {
  const componentId = uuidv4();
  const icon = Icon("icon-github-cat ml-half");
  const a = (innerText, href, className) =>
    Element(
      "a",
      {
        innerText,
        href,
        className: `${className ? className : ""}`,
      },
      innerText.toLowerCase() === "github repo" ? [icon] : []
    );

  const subLinkObjects = props.subLinkObjects ? props.subLinkObjects : [];

  const panelTitle = Element("a", {
    className:
      "panel-title bg-transparent text-white border-none text-uppercase cursor-pointer ",
    innerText: props.innerText,
    onclick() {
      console.log("clicked");
      const selectedAccordionContentWrapper = document.getElementById(
        "accordion-content-wrapper-" + componentId
      );
      selectedAccordionContentWrapper.classList.toggle("visible");
    },
  });
  const linkClasses = "bg-primary-light-1 bg-primary-dark-2 ml-1";

  const accordionContent = Element("div", { className: "accordion-content" }, [
    ...subLinkObjects.map((obj) => a(obj.innerText, obj.href, linkClasses)),
  ]);

  const accordionContentWrapper = Element(
    "div",
    {
      id: `accordion-content-wrapper-${componentId}`,
      className: "accordion-content-wrapper",
    },
    [accordionContent]
  );

  const accordionPanel = Element(
    "div",
    {
      id: ``,
      className: `accordion-panel bg-primary-light-1 p-1 text-uppercase bg-hover-primary-dark-2 cursor-pointer`,
    },
    // children
    [panelTitle, accordionContentWrapper]
  );
  return accordionPanel;
};

export default MobileMenuAccordionLink;
