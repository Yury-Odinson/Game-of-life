import {Canvas} from "./canvas";

export class Game {

    #dim = 20;

    constructor() {
        this.matrix = this.#createMatrix();
        this.canvas = new Canvas();
        this.isRunning = false;
    };

    #createMatrix() {
        const field = new Array(this.#dim);
        for (let i = 0; i < this.#dim; i++) {
            field[i] = new Array(this.#dim).fill(0);
        }
        return field;
    };

    setCellValue(row, col, value) {
        this.matrix[row][col] = value;
    };

    findLiveNeighbours(row, col) {

        let sumLiveNeighbours = 0;

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {

                if (i >= 0 && i < this.#dim && j >= 0 && j < this.#dim) {
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

        const newMatrix = this.#createMatrix();

        for (let i = 0; i < this.#dim; i++) {
            for (let j = 0; j < this.#dim; j++) {

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
        this.renderField();

    };

    processGame() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.timer = setInterval(() => {
                this.checkAllCells();
            }, 100)
        } else {
            clearInterval(this.timer);
        }
    };

    renderField() {
        this.canvas.drawField(this.matrix);
    };

    init() {
        this.canvas.init();
    };

}
