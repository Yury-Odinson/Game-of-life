import {Canvas} from "./canvas";

export class Cell {
    #value;

    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    setValue(value) {
        this.#value = value;
    }
}

export class Matrix {
    #rows;
    #cols;
    #matrix;

    constructor(rows, cols) {
        this.#rows = rows;
        this.#cols = cols;
        this.#matrix = this.#createMatrix(rows, cols);
    }

    getRows() {
        return this.#rows;
    }

    getCols() {
        return this.#cols;
    }

    #createMatrix(rows, cols) {
        const field = new Array(rows);

        for (let i = 0; i < rows; i++) {
            field[i] = new Array(cols).fill(new Cell(0));
        }

        return field;
    };

    getCellAt(i, j) {
        // TODO: check boundaries
        return this.#matrix[i][j];
    }

    getNeighboursOf(row, col) {
        const neighbours = [];

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) continue;
                if (i >= 0 && i < this.#rows && j >= 0 && j < this.#cols) {
                    const cell = this.getCellAt(i, j);
                    neighbours.push(cell);
                }
            }
        }

        return neighbours;
    }

    forEach(callback) {
        for (let i = 0; i < this.getRows(); i++) {
            for (let j = 0; j < this.getCols(); j++) {
                callback(i, j, this.getCellAt(i, j));
            }
        }
    }
}

export class Game {
    #updateIntervalMs = 500;
    #matrix;

    constructor(rows = 10, cols = 10) {
        this.#matrix = new Matrix(rows, cols);
        this.canvas = new Canvas();
        this.isRunning = false;
    };

    setCellValue(row, col, value) {
        const cell = this.#matrix.getCellAt(row, col);
        cell.setValue(value);
    };

    countLiveNeighbours(row, col) {
        const neighbours = this.#matrix.getNeighboursOf(row, col);

        return neighbours.reduce((accumulator, currentCell) => accumulator + currentCell.getValue(), 0);
    };

    checkAllCells() {
        const newMatrix = new Matrix(this.#matrix.getRows(), this.#matrix.getCols());

        this.#matrix.forEach((i, j, currentCell) => {
            const quantityLiveNeighbours = this.countLiveNeighbours(i, j);

            let newCellValue = 0;

            if (currentCell.getValue() === 0 && quantityLiveNeighbours === 3) {
                newCellValue = 1
            } else if (currentCell.getValue() === 1 && (quantityLiveNeighbours === 2 || quantityLiveNeighbours === 3)) {
                newCellValue = 1;
            }

            const newCell = newMatrix.getCellAt(i, j);
            newCell.setValue(newCellValue);
        });

        this.#matrix = newMatrix;
        this.renderField();
    };

    processGame() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.timer = setInterval(() => {
                this.checkAllCells();
            }, this.#updateIntervalMs)
        } else {
            clearInterval(this.timer);
        }
    };

    renderField() {
        // TODO: fix canvas render
        this.canvas.drawField(this.#matrix);
    };

    init() {
        this.canvas.init();
    };
}