import {createElement} from "./module";
import {game} from "./index";

export const newGame = createElement("button", [], {});
newGame.innerHTML = "new Game";
newGame.addEventListener("click", () => start());

export const startStopGame = createElement("button", [], {});
startStopGame.innerHTML = "start / pause Game";
startStopGame.addEventListener("click", () => game.processGame());

function start() {
    game.setDefaultCellValue(1, 2, 1);
    game.setDefaultCellValue(2, 3, 1);
    game.setDefaultCellValue(3, 1, 1);
    game.setDefaultCellValue(3, 2, 1);
    game.setDefaultCellValue(3, 3, 1);
    game.updateField();
}
