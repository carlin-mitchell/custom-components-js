import "./styles/index.scss";
import Content from "./components/Content/Content";

import { applyWindowListeners } from "./managers/uiManager/windowEventListeners";

const debugging = true;

document.body.appendChild(Content());
document.body.classList.add("p-2");

applyWindowListeners();

// debugging
if (debugging) {
  //
}
