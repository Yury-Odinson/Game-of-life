import {createElement} from "./module";
import {game} from "./index";

export const checkField = createElement("button", [], {});
checkField.innerHTML = "check field";
checkField.addEventListener("click", () => console.log(game.matrix));

export const startGame = createElement("button", [], {});
startGame.innerHTML = "start Canvas";
startGame.addEventListener("click", () => start());

export const nextStep = createElement("button", [], {});
nextStep.innerHTML = "next step";
nextStep.addEventListener("click", () => game.updateField());

function start() {
    game.setCellValue(5, 6, 1);
    game.setCellValue(6, 7, 1);
    game.setCellValue(7, 5, 1);
    game.setCellValue(7, 6, 1);
    game.setCellValue(7, 7, 1);
    game.updateField();
}
