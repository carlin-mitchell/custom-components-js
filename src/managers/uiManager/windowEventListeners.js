import { mobileMenuUp } from "./mobileMenu-ui";

const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

export function applyWindowListeners() {
  window.onresize = function (e) {
    const { innerWidth } = e.target;

    if (innerWidth >= breakPoints.md) {
      console.log(innerWidth);
      const mobileMenu = document.querySelector(".mobile-menu");
      if (mobileMenu.classList.contains("menu-down")) {
        mobileMenuUp();
      }
    }
  };
}
