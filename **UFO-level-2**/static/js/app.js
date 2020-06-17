// from data.js
var tableData = data;

// table reference
var UFO_table = d3.select("tbody");

function createTable(ufoData) {
    //UFO_table.html("")
    ufoData.forEach((ufoRow) => {
        var row = UFO_table.append("tr"); //empty row
        Object.values(ufoRow).forEach((cellVal) => {
            var cell = row.append("td")
            cell.text(cellVal)
        })

    })
};
//function ufoFilter() {
    //grab input (date/time)
   // var inputDate = d3.select('#datetime').property('value')
    //console.log(inputDate);
    //filter table data based on input-date
    //var filteredData = tableData.filter(ufoRow => ufoRow.datetime === inputDate);
    //createTable(filteredData)

   //     };

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", ufoFilter2);
form.on("submit", ufoFilter2);

function ufoFilter2() {
    d3.event.preventDefault()

    // Select the input date, state, shape and get the raw HTML nodes
    var input = d3.select("#input")
    .property("value");
    //console.log(input);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(ufoRow => ufoRow.datetime === input ||
                                                    ufoRow.city === input ||
                                                    ufoRow.state === input ||
                                                    ufoRow.country === input ||
                                                    ufoRow.shape === input);
    createTable(filteredData)
};
                                                
//event listener for btn.click
d3.selectAll("#filter-btn").on("click", ufoFilter2)

createTable(tableData);

};