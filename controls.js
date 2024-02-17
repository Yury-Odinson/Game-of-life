import {createElement} from "./module";
import {game} from "./index";

export const controlsBlock = createElement("div", ["controls"], {});

const newGame = createElement("button", ["controls__button"], {});
newGame.innerHTML = "Add live";

const startStopGame = createElement("button", ["controls__button"], {});
startStopGame.innerHTML = "start / pause Game";

newGame.addEventListener("click", () => addLive());
startStopGame.addEventListener("click", () => game.processGame());

controlsBlock.append(newGame, startStopGame);

function addLive() {
    game.setCellValue(1, 2, 1);
    game.setCellValue(2, 3, 1);
    game.setCellValue(3, 1, 1);
    game.setCellValue(3, 2, 1);
    game.setCellValue(3, 3, 1);
    game.renderField();
}
