import { v4 as uuidv4 } from "uuid";

// Image sources
import Brick from "../assets/brick.png";
import PaintFace from "../assets/paint-face.png";
import Mac from "../assets/mac.png";
import Computer from "../assets/computer.png";
import WebDev from "..//assets/webdev.png";

// add isActive: true to the slide you want to start as active
const imageSources = [
  { src: Brick, isActive: true },
  { src: PaintFace },
  { src: Mac },
  { src: Computer },
  { src: WebDev },
];

export const imageData = imageSources.map((obj) => ({
  ...obj,
  uuid: uuidv4(),
}));
