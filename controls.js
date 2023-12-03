import {createElement} from "./module";
import {game} from "./index";

export const checkField = createElement("button", [], {});
checkField.innerHTML = "check field";
checkField.addEventListener("click", () => console.log(game.matrix));

export const startGame = createElement("button", [], {});
startGame.innerHTML = "start Game";
startGame.addEventListener("click", () => start());

export const nextStep = createElement("button", [], {});
nextStep.innerHTML = "set cell";
nextStep.addEventListener("click", () => game.checkAllCells());


export const test = createElement("button", [], {});
test.innerHTML = "test";
test.addEventListener("click", () => game.findLiveNeighbours(4, 2));


function start() {
    game.setDefaultCellValue(1, 2, 1);
    game.setDefaultCellValue(2, 3, 1);
    game.setDefaultCellValue(3, 1, 1);
    game.setDefaultCellValue(3, 2, 1);
    game.setDefaultCellValue(3, 3, 1);
    game.updateField();
}
