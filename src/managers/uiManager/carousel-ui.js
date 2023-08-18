export function getAllCarouselSlides() {
  return [...document.querySelector(".carousel-track").childNodes];
}

function getAllCarouselNavButtons() {
  return [...document.querySelectorAll(".carousel-indicator")];
}

// move right when clicking on the right button
export function clickCarouselRight() {
  console.log("carousel right");
}

// move left when clicking on the right button
export function clickCarouselLeft() {
  console.log("carousel left");
}

// move to the selected slide
export function gotoSpecificSlide(id) {
  const allNavButtons = getAllCarouselNavButtons();
  const selectedNavButton = document.getElementById(`carousel-nav-${id}`);
  const selectedSlide = document.getElementById(`carousel-slide-${id}`);
  const allSlides = getAllCarouselSlides();

  allSlides.forEach((slide) => slide.classList.remove("active"));
  selectedSlide.classList.add("active");

  allNavButtons.forEach((slide) => slide.classList.remove("active"));
  selectedNavButton.classList.add("active");
}

export function clickCarouselNav(id) {
  gotoSpecificSlide(id);
}
