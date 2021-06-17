// from data.js
var tableData = data;

// Creating References to tbody, input and button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
var addData = (dataInput) => {
   dataInput.forEach(ufoSightings => {
       var row = $tbody.append("tr");
       columns.forEach(column => row.append("td").text(ufoSightings[column])
       )
   });
}

addData(tableData)

// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
function runEvent(){

    var inputElement = d3.select("#datetime");

    var inputData = inputElement.property("value");

    if (inputData == "") {inputData = tableData[0].datetime;}


   // console.log(inputDate)
   // trim the inputs
   var filterDate = tableData.filter(sighting => sighting.datetime === inputDate);

   createTable(filteredData);

};

runEvent();
