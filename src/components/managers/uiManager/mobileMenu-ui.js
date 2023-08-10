export function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu.classList.contains("menu-down")) {
    mobileMenuUp();
  } else {
    mobileMenuDown();
  }
}

export function mobileMenuUp() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.remove("menu-down");
  mobileMenu.classList.add("menu-up");
}

export function mobileMenuDown() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.remove("menu-up");
  mobileMenu.classList.add("menu-down");
}
