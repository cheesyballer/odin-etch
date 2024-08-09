const grid = document.getElementById("grid");

// After stress testing this function, it seems that setting a *max value of 50* for both
// row and col is fine, as this still allows for good resolution.
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