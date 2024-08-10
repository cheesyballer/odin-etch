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
            str += `<div onmouseover=darken(this) class=box id=box-${num} opacity=0 style="opacity:0;background-color:rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)});"></div>`;
            num++;
            i--;
        }
        str += "</div>";

        full += str;
        currentRow++;
    }

    grid.innerHTML = full;
}

function darken(box) {
    op = Number(box.getAttribute("opacity"));
    op += 2;
    box.setAttribute("opacity", op);
    box.style.opacity = op / 10;
}

function changeGrid() {
    let newRow = prompt("Give # of rows (max: 50, min: 0)", 4);
    let newCol = prompt("Give # of cols (max: 50, min: 0)", 4);

    if(newRow > 50) {newRow = 50;}
    if(newCol > 50) {newCol = 50;}

    if(newRow < 0) {newRow = 0;}
    if(newCol < 0) {newCol = 0;}

    document.getElementById("size-display").textContent = `${newRow}x${newCol} grid`;
    makeGrid(newRow, newCol);
}

// Default grid
makeGrid(4,4)