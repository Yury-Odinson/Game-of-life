import {createElement} from "./module";
import {game} from "./index";

export const newGame = createElement("button", [], {});
newGame.innerHTML = "new Game";
newGame.addEventListener("click", () => start());

export const startStopGame = createElement("button", [], {});
startStopGame.innerHTML = "start / pause Game";
startStopGame.addEventListener("click", () => game.processGame());

function start() {
    game.setCellValue(1, 2, 1);
    game.setCellValue(2, 3, 1);
    game.setCellValue(3, 1, 1);
    game.setCellValue(3, 2, 1);
    game.setCellValue(3, 3, 1);
    game.renderField();
}
