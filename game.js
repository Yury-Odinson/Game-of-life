import {Canvas} from "./canvas";

export class Game {
    constructor(row, col, initValue) {
        this.matrix = this.createMatrix();
        this.canvas = new Canvas();
        this.isGame = false;
    };

    createMatrix() {
        const field = new Array(10);
        for (let i = 0; i < 10; i++) {
            field[i] = new Array(10).fill(0);
        }
        return field;
    };

    setDefaultCellValue(row, col, value) {
        this.matrix[row][col] = value;
    };

    findLiveNeighbours(row, col) {

        const rows = this.matrix.length;
        const cols = this.matrix[0].length;

        let sumLiveNeighbours = 0;

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {

                if (i >= 0 && i < rows && j >= 0 && j < cols) {
                    if (i === row && j === col) continue;
                    if (this.matrix[i][j] === 1) {
                        sumLiveNeighbours++;
                    }
                }

            }
        }
        return sumLiveNeighbours;
    };

    checkAllCells() {
        const rows = this.matrix.length;
        const cols = this.matrix[0].length;

        const newMatrix = this.createMatrix();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                const currentCell = this.matrix[i][j];
                const quantityLiveNeighbours = this.findLiveNeighbours(i, j);

                if (currentCell === 0 && quantityLiveNeighbours === 3) {
                    newMatrix[i][j] = 1;
                } else if (currentCell === 1 && (quantityLiveNeighbours === 2 || quantityLiveNeighbours === 3)) {
                    newMatrix[i][j] = 1;
                } else {
                    newMatrix[i][j] = 0;
                }

            }
        }

        this.matrix = newMatrix;
        this.updateField();

    };

    processGame() {
        this.isGame = !this.isGame;
        if (this.isGame) {
            this.timer = setInterval(() => {
                this.checkAllCells();
            }, 500)
        } else {
            clearInterval(this.timer);
        }
    };

    updateField() {
        this.canvas.drawField(this.matrix);
    };

    init() {
        this.canvas.init();
    };

}
