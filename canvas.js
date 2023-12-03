import {createElement} from "./module";
import {wrapper} from "./index";

export class Canvas {
    constructor() {
        this.canvas = createElement("canvas", [],
            {"id": "canvas", "width": "400", "height": "400"}
        );
        this.ctx = this.canvas.getContext("2d");
        this.cellSize = 40;
    }

    initialMatrix() {
        const field = new Array(10);
        for (let i = 0; i < 10; i++) {
            field[i] = new Array(10).fill(0);
        }
        return field;
    }

    drawField(matrix) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {

                const x = j * this.cellSize;
                const y = i * this.cellSize;

                if (matrix[i][j] !== 0) {
                    this.ctx.fillStyle = "black";
                } else {
                    this.ctx.fillStyle = "white";
                }

                this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
                this.ctx.strokeRect(x, y, this.cellSize, this.cellSize);
            }
        }
    };

    init() {
        this.drawField(this.initialMatrix());
        wrapper.appendChild(this.canvas);
    };
}
