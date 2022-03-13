let colorSelected; 
var row_length = 1;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    // console.log(rows.length);

    let row = document.createElement("tr");

    let current_row_length = row.getElementsByTagName("td").length;
    while(current_row_length < row_length)
    {
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        current_row_length++;
    }
    grid.appendChild(row);

}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let rows = document.querySelectorAll("tr");
    rows.forEach((row) => 
    {
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
    });
    row_length++;
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    grid.removeChild(grid.lastElementChild);
}
//Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr");
    for (let row of rows)
    {
        row.removeChild(row.lastElementChild);
    }
    row_length--;
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
    let test = document.getElementsByTagName("td")
    colorSelected = document.getElementById("selectedID").value;
    colorSelected = colorSelected.toLowerCase()
    for(var i =0;i<test.length;i++){
        test[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    alert("Clicked Clear All")
    let test = document.getElementsByTagName("td")
    for(var i =0;i<test.length;i++){
        test[i].style.backgroundColor = "white";
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}