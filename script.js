const grid = document.getElementById("grid");

function makeGrid(row, col) {
    let full = "";
    let num = 0;
    let currentRow = 0;

    while(currentRow != row) {
        let str = `<div class=row id=row-${currentRow}>`;
        let i = col;

        while(i != 0) {
            str += `<div class=box id=box-${num}></div>`;
            num++;
            i--;
        }
        str += "</div>";

        full += str;
        currentRow++;
    }

    grid.innerHTML = full;
}

makeGrid(4,4)