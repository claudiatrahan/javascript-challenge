// from data.js
var tableData = data;

// table reference
var UFO_table = d3.select("tbody");

function createTable(ufoData) {
    UFO_table.html("")
    ufoData.forEach((ufoRow) => {
        var row = UFO_table.append("tr"); //empty row
        Object.values(ufoRow).forEach((cellVal) => {
            var cell = row.append("td")
            cell.text(cellVal)
        })

    })
}
function ufoFilter() {
    //grab input (date/time)
    var inputDate = d3.select('#datetime').property('value')
    console.log(inputDate);
    //filter table data based on input-date
    var filteredData = tableData.filter(ufoRow => ufoRow.datetime === inputDate);
    createTable(filteredData)

        };

//event listner for btn.click
d3.selectAll("#filter-btn").on("click", ufoFilter)

createTable(tableData);

