export function getCarouselSlides() {
  const track = document.querySelector(".carousel-track");
  return track;
}

// move right when clicking on the right button
export function clickCarouselRight() {
  console.log("carousel right");
}

// move left when clicking on the right button
export function clickCarouselLeft() {
  console.log("carousel left");
}

// move to the selected slide when clicking a nav indicator
export function clickCarouselNav(id) {
  const navButton = document.getElementById(`carousel-nav-${id}`);
  const slide = document.getElementById(`carousel-slide-${id}`);
  console.log("clicked on", navButton);
  console.log("goto", slide);
}
