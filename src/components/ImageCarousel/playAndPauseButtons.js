import Element from "../Element";
import Icon from "../base-elements/Icon";
import { clickCarouselPlay, clickCarouselPause } from "./ui/carousel-ui";

export const PlayButton = Element(
  "button",
  {
    className: "play-button visible",
    onclick() {
      clickCarouselPlay();
    },
  },
  [Icon("icon-triangle rotate-90 font-sm text-gray-dark-4")]
);

export const PauseButton = Element(
  "button",
  {
    className: "pause-button",
    onclick() {
      clickCarouselPause();
    },
  },
  [Icon("icon-pause font-sm text-gray-dark-4")]
);
