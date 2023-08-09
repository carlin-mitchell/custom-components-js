function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenu.classList.contains("menu-down")) {
    mobileMenu.classList.remove("menu-down");
    mobileMenu.classList.add("menu-up");
  } else {
    mobileMenu.classList.remove("menu-up");
    mobileMenu.classList.add("menu-down");
  }
}

const uiManager = {
  toggleMobileMenu,
};

export default uiManager;
