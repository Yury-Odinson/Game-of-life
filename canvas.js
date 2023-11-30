import {createElement} from "./module";
import {wrapper} from "./index";

export class Game {
    constructor() {
        this.canvas = createElement("canvas", [],
            {"id": "canvas", "width": "400", "height": "400"}
        );
        this.ctx = this.canvas.getContext("2d");
        this.cellSize = 20;
    }

    drawField() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                const x = j * this.cellSize;
                const y = i * this.cellSize;

                this.ctx.fillStyle = "white";
                this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
                this.ctx.strokeRect(x, y, this.cellSize, this.cellSize);
            }
        }
    }
    init() {
        this.drawField();
        wrapper.appendChild(this.canvas);
    }
}
