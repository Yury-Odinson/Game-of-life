import "./index.css";
import {createElement} from "./module";
import {newGame, startStopGame} from "./controls";
import {Game} from "./game";

export const wrapper = createElement("div", ["wrapper"], {});
document.body.appendChild(wrapper);

export const game = new Game();
window.onload = () => game.init();
wrapper.append(newGame, startStopGame);
