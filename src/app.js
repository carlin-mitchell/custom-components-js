import "./styles/index.scss";
import Content from "./components/Content/Content";

import { applyWindowListeners } from "./managers/uiManager/windowEventListeners";

document.body.appendChild(Content());
document.body.classList.add("p-2");

applyWindowListeners();
