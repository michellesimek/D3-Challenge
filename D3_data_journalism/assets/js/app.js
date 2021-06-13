// @TODO: YOUR CODE HERE!
// load in data from csv
// d3.csv("assets/data/data.csv").then(data => {
//     // console log to make sure data loads in
//     console.log(data)
// });

// ----------------------
// set up the chart
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// create svg wrapper and append an SCG group that will hold chart
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// import data
d3.csv("assets/data/data.csv").then(data => {
    // console log to make sure data loads in
    console.log(data)
    
    data.forEach(data => {
        console.log(data.state);
    })

    // Add X Axis

    // Add Y Axis

    // Add markers for data points
}).catch(function(error) {
    console.log(error);
});