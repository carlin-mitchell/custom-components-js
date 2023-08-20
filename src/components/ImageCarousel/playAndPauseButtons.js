import Element from "../Element";
import Icon from "../base-elements/Icon";
import { clickPlay, clickPause } from "./ui/carousel-ui";

export const PlayButton = Element(
  "button",
  {
    className: "play-button visible",
    onclick() {
      clickPlay();
    },
  },
  [Icon("icon-triangle rotate-90 font-sm text-gray-dark-5")]
);

export const PauseButton = Element(
  "button",
  {
    className: "pause-button",
    onclick() {
      clickPause();
    },
  },
  [Icon("icon-pause font-sm text-gray-dark-5")]
);
