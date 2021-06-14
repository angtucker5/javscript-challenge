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

addData(tableData);
// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

   d3.event.preventDefault();
   var inputDate = inputFieldDate.property("value").trim();
   // console.log(inputDate)
   // trim the inputs
   var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
   $tbody.html("");
   let response = {
       filterDate


   if(response.filterDate.length !== 0) {

       addData(filterDate);

   // add comment if not sightings

       else {


           $tbody.append("tr").append("td").text("No Sightings Here...Nextin Line...");
// Initialize the button instance
var button = d3.select("#filter-btn");

// Initialize the form instance
var form = d3.select("#form");

// Create Event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

// Function to create and append data to the table
function createTable(filteredData){

   // Select the table element by id
   var table = d3.select("#ufo-table");

   // Select the tbody element by id
   var tbody = table.select("tbody");
   var trow;

   // Sets the table to it's default blank setting for population
   tbody.html("");

   // Loop through each object and append the data to the table
   filteredData.forEach(function(dataObject){
       // Create new row for each object
       trow = tbody.append("tr");
       trow.append("td").text(dataObject.datetime);
       trow.append("td").text(dataObject.city);
       trow.append("td").text(dataObject.ctate);
       trow.append("td").text(dataObject.country);
       trow.append("td").text(dataObject.shape);
       trow.append("td").text(dataObject.durationMinutes);
       trow.append("td").text(dataObject.comments);

   });

};

// Event Handler Function
function runEvent(){


   // Prevent Page from Refreshing
   //d3.event.preventDefault();
   // Select the input element and get the raw HTML node

   var inputElement = d3.select("#datetime");

   // Get the input value (date) from the input element
   var inputData = inputElement.property("value");

   //Check for input data
       if (inputData == "") {inputData = tableData[0].datetime;}


   // Filter the data.js by the input value
   var filteredData = tableData.filter(sighting => sighting.datetime === inputData);

   // Call the createTable function with the
   // filteredData as the parameter

   createTable(filteredData);

};

runEvent();
