let colorSelected; 
function getCols() {
    let rows = document.getElementsByTagName("tr");
    let last_row = rows.item(rows.length-1);
    if(last_row === null)
    {
        return 1;
    }
    let cols = last_row.getElementsByTagName("td");
    return cols.length;
}

function grid_has_row() {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr");
    return rows.length > 0;
}

//Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");
    let num_cols = getCols(grid);
    for(let i = 0; i < num_cols; i++)
    {
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
    }
    grid.appendChild(row);
}
//Adds a column
function addC() {
    let rows = document.querySelectorAll("tr");
    rows.forEach((row) => 
    {
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
    });
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    if(grid_has_row())
        grid.removeChild(grid.lastElementChild);
    else
        alert("no rows to remove");
}
//Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr");
    if(rows !== null && rows[rows.length-1] !== undefined && rows[rows.length-1].childElementCount > 1)
    {
        for (let row of rows)
        {
            row.removeChild(row.lastElementChild);
        }
    }
    else if(rows !== null && rows[rows.length-1] !== undefined && rows[rows.length-1].childElementCount == 1)
    {
        for(let row of grid.querySelectorAll("tr"))
        {
            grid.removeChild(row);
        }
    }
    else
    {
        alert("no cols to remove");
    }


}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    let cells = document.getElementsByTagName("td")
    colorSelected = document.getElementById("selectedID").value;
    colorSelected = colorSelected.toLowerCase()
    for(let i =0;i<cells.length;i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td")
    for(let i =0;i<cells.length;i++){
        cells[i].style.backgroundColor = "white";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td")
    colorSelected = document.getElementById("selectedID").value;
    colorSelected = colorSelected.toLowerCase()
    for(let i =0;i<cells.length;i++){
        if(cells[i].style.backgroundColor == "white" || cells[i].style.backgroundColor == ""){
            cells[i].style.backgroundColor = colorSelected;
        }
        
    }
}