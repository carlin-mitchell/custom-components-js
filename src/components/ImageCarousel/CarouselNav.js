import Element from "../Element";
import { clickCarouselNav } from "./ui/carousel-ui";
import Icon from "../base-elements/Icon";

// LOGIC IMPORTS
import { clickPlay, clickPause } from "./ui/carousel-ui";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = (imageData) => {
  const carouselNavIndicator = (imageId, startsActive) =>
    Element("button", {
      id: `carousel-nav-${imageId}`,
      className: `carousel-indicator display-i-b bg-gray-light-6 ${
        startsActive ? "active" : ""
      }`,
      onclick: function () {
        clickCarouselNav(imageId);
      },
    });

  const playButton = Element(
    "button",
    {
      className: "play-button visible",
      onclick() {
        clickPlay();
      },
    },
    [Icon("icon-triangle rotate-90 font-sm text-gray-dark-5")]
  );
  const pauseButton = Element(
    "button",
    {
      className: "pause-button",
      onclick() {
        clickPause();
      },
    },
    [Icon("icon-pause font-sm text-gray-dark-5")]
  );
  const carouselPlayPauseContainer = Element(
    "div",
    {
      className: "carousel-play-pause-container",
    },
    // childern
    [pauseButton, playButton]
  );

  const navDiv = Element(
    "div",
    {
      id: ``,
      className: `carousel-nav pt-1`,
    },
    // children
    [
      carouselPlayPauseContainer,
      ...imageData.map((obj, index) =>
        carouselNavIndicator(obj.uuid, obj.isActive ? true : false)
      ),
    ]
  );
  return navDiv;
};

export default CarouselNav;
