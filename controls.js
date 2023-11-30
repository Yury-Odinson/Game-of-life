import {createElement, Field} from "./module";

const field = new Field();
export const checkField = createElement("button", [], {});
checkField.innerHTML = "check field";
checkField.addEventListener("click", () => console.log(field.matrix));


export const startGame = createElement("button", [],{});
startGame.innerHTML = "start Game";
startGame.addEventListener("click", () => start());

function start() {
    field.setCellValue(5,6,1);
    field.setCellValue(6,7,1);
    field.setCellValue(7,5,1);
    field.setCellValue(7,6,1);
    field.setCellValue(7,7,1);
    console.log(field.matrix);
}



