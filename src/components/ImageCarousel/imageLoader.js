import { v4 as uuidv4 } from "uuid";

import Brick from "./assets/brick.png";
import PaintFace from "./assets/paint-face.png";
import Mac from "./assets/mac.png";
import Computer from "./assets/computer.png";

export const imageData = [
  { src: Brick, uuid: uuidv4() },
  { src: PaintFace, uuid: uuidv4() },
  { src: Mac, uuid: uuidv4() },
  { src: Computer, uuid: uuidv4() },
];
