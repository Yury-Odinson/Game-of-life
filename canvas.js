import {createElement} from "./module";
import {wrapper} from "./index";

export class Canvas {

    #dimension = 40;
    #cellSize= 10;

    constructor() {
        this.canvas = createElement("canvas", [],
            {"id": "canvas", "width": "400", "height": "400"}
        );
        this.ctx = this.canvas.getContext("2d");
    }

    initialMatrix() {
        const field = new Array(this.#dimension);
        for (let i = 0; i < this.#dimension; i++) {
            field[i] = new Array(this.#dimension).fill(0);
        }
        return field;
    }

    drawField(matrix) {
        for (let i = 0; i < this.#dimension; i++) {
            for (let j = 0; j < this.#dimension; j++) {

                const x = j * this.#cellSize;
                const y = i * this.#cellSize;

                if (matrix[i][j] !== 0) {
                    this.ctx.fillStyle = "black";
                } else {
                    this.ctx.fillStyle = "white";
                }

                this.ctx.fillRect(x, y, this.#cellSize, this.#cellSize);
                this.ctx.strokeRect(x, y, this.#cellSize, this.#cellSize);
            }
        }
    };

    init() {
        this.drawField(this.initialMatrix());
        wrapper.appendChild(this.canvas);
    };
}
