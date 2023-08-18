export function getAllCarouselSlides() {
  return [...document.querySelector(".carousel-track").childNodes];
}

function getAllCarouselNavButtons() {
  return [...document.querySelectorAll(".carousel-indicator")];
}

function getPreviousSlideIndex() {
  let previousSlideIndex = getCurrentSlideIndex() - 1;

  const correctedIndex =
    previousSlideIndex < 0
      ? getAllCarouselSlideIds().length - 1
      : previousSlideIndex;

  return correctedIndex;
}

function getNextSlideIndex() {
  console.log(getCurrentSlideIndex());
  let nextSlideIndex = getCurrentSlideIndex() + 1;
  console.log(nextSlideIndex);
  const correctedIndex =
    nextSlideIndex > getAllCarouselSlideIds().length - 1 ? 0 : nextSlideIndex;

  return correctedIndex;
}

function getAllCarouselSlideIds() {
  return getAllCarouselSlides().map((elem) => elem.id);
}

function getCurrentSlideIndex() {
  const allSlideIds = getAllCarouselSlideIds();
  const currentSlideId = document.querySelector(".carousel-slide.active").id;
  console.log(currentSlideId);
  const currentSlideIndex = allSlideIds.indexOf(currentSlideId);

  return currentSlideIndex;
}

// move right when clicking on the right button
export function clickCarouselRight() {
  const id = getAllCarouselSlideIds()[getNextSlideIndex()].replace(
    "carousel-slide-",
    ""
  );
  console.log(id);
  gotoSpecificSlide(id);
}

// move left when clicking on the right button
export function clickCarouselLeft() {
  const id = getAllCarouselSlideIds()[getPreviousSlideIndex()].replace(
    "carousel-slide-",
    ""
  );
  console.log(id);
  gotoSpecificSlide(id);
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
