export function createElement(block, [...cssClass], {...attrs}) {
    const element = document.createElement(block);
    element.classList.add(...cssClass);
    for (const key in attrs) {
        element.setAttribute(key, attrs[key]);
    }
    return element;
}

export class Field {
    constructor(row, col, initValue) {
        this.rows = row;
        this.cols = col;
        this.matrix = this.createMatrix();
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

    printMatrix() {
        console.log(this.matrix)
    }

}
