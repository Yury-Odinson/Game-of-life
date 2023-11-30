import "./index.css";
import {createElement, Field} from "./module";
import {Game} from "./canvas";
import {checkField, startGame} from "./controls";

export const wrapper = createElement("div", ["wrapper"], {});
document.body.appendChild(wrapper);

const game = new Game();

window.onload = () => game.init();
wrapper.append(checkField, startGame);
