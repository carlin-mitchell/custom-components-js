export function getCarouselImages() {
  const carouselImages = document.querySelectorAll(".carousel-slide");
  return [...carouselImages];
}

export function displayCarouselImage(id) {
  const carouselSlides = getCarouselImages();
  console.log(carouselSlides);
  const selectedImage = document.querySelector(`#carousel-slide-${id}`);

  carouselSlides.forEach((image) => {
    image.classList.remove("active");
  });

  selectedImage.classList.add("active");
}
