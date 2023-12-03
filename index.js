import "./index.css";
import {createElement} from "./module";
import {checkField, nextStep, startGame, test} from "./controls";
import {Game} from "./game";

export const wrapper = createElement("div", ["wrapper"], {});
document.body.appendChild(wrapper);

export const game = new Game();
window.onload = () => game.init();
wrapper.append(checkField, startGame, nextStep, test);
