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
    let newRow = prompt("Give # of rows", 4);
    let newCol = prompt("Give # of cols", 4);

    makeGrid(newRow, newCol);
}

// Default grid
makeGrid(4,4)