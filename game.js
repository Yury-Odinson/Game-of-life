import {Canvas} from "./canvas";

export class Game {
    constructor(row, col, initValue) {
        this.matrix = this.createMatrix();
        this.canvas = new Canvas();
    }

    createMatrix() {
        const field = new Array(20);
        for (let i = 0; i < 20; i++) {
            field[i] = new Array(20).fill(0);
        }
        return field;
    }

    getCellValue(row, col, value) {
        return this.matrix[row][col] = value;
    }

    setCellValue(row, col, value) {
        this.matrix[row][col] = value;
    }

    updateField() {
        this.canvas.drawField(this.matrix);
    }
    init() {
        this.canvas.init();
    }

}
