import {createElement} from "./module";
import {wrapper} from "./index";

export class Canvas {

    #dim = 20;

    constructor() {
        this.canvas = createElement("canvas", [],
            {"id": "canvas", "width": "400", "height": "400"}
        );
        this.ctx = this.canvas.getContext("2d");
    }

    initialMatrix() {
        const field = new Array(this.#dim);
        for (let i = 0; i < this.#dim; i++) {
            field[i] = new Array(this.#dim).fill(0);
        }
        return field;
    }

    drawField(matrix) {
        for (let i = 0; i < this.#dim; i++) {
            for (let j = 0; j < this.#dim; j++) {

                const x = j * this.#dim;
                const y = i * this.#dim;

                if (matrix[i][j] !== 0) {
                    this.ctx.fillStyle = "black";
                } else {
                    this.ctx.fillStyle = "white";
                }

                this.ctx.fillRect(x, y, this.#dim, this.#dim);
                this.ctx.strokeRect(x, y, this.#dim, this.#dim);
            }
        }
    };

    init() {
        this.drawField(this.initialMatrix());
        wrapper.appendChild(this.canvas);
    };
}
