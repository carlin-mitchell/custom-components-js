import "./styles/index.scss";
import Content from "./components/Content/Content";

import { applyWindowListeners } from "./managers/uiManager/windowEventListeners";
import { getCarouselSlides } from "./managers/uiManager/carousel-ui";

const debugging = true;

document.body.appendChild(Content());
document.body.classList.add("p-2");

applyWindowListeners();

// debugging
if (debugging) {
  console.log(getCarouselSlides());
}
