// Get the grid div element
const grid = document.getElementById("grid");

// After stress testing this function, it seems that setting a *max value of 50* for both
// row and col is fine, as this still allows for good resolution.

// Make the grid with "row" rows and "col" columns
function makeGrid(row, col) {
    // "full" will be the variable we add to as we generate the HTML
    let full = "";
    // Iterator that keeps track of which box we are generating for ID purposes
    let num = 0;
    // Iterator that keeps track of which row we are generating for ID purposes + being a loop control variable
    let currentRow = 0;

    //Loop through the rows we need to generate
    while(currentRow != row) {
        // Start the row's HTML
        let str = `<div class=row id=row-${currentRow}>`;
        // Temp column variable
        let i = col;

        while(i != 0) {
            // Once again I blacked out and the devil made me write this atrocity (A+ for working though!)
            str += `<div onmouseover=darken(this) class=box id=box-${num} opacity=0 style="opacity:0;background-color:rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)});"></div>`;
            
            // Iterate both the box number we are on + the column we are at in the current row we are generating
            num++;
            i--;
        }

        // Add closing tag to our row's HTML
        str += "</div>";

        // Add the row to full and move to the next row
        full += str;
        currentRow++;
    }

    // Make the innerHTML equal to full, which is all the rows we generated
    grid.innerHTML = full;
}

// Increase the opacity of the box by 20% (0% --> 20% --> 40% --> ...)
function darken(box) {
    op = Number(box.getAttribute("opacity"));
    op += 2;
    box.setAttribute("opacity", op);
    box.style.opacity = op / 10;
}

// Change the grid size when the button is pressed based on user text input
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