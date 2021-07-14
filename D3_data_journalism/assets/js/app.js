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
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// import data
d3.csv("assets/data/data.csv").then(data => {
    // console log to make sure data loads in
    console.log([data])
    // let chartData = {};
    // let stateAbbrev = [];
    
    data.forEach(data => {
      data.poverty = +data.poverty;
      data.healthcare = +data.healthcare;
      // data.state = +data.state;
        // let domain = d3.extent(data)
        // console.log(domain)

        console.log(data.poverty);
        console.log(data.healthcare);
        console.log(data.abbr);
    })

    // create scales
    var xLinearScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.poverty)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.healthcare)])
      .range([height,0]);

    // create axes
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append axes
    chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // create and append circles
    var circlesGroup = chartGroup.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.poverty))
      .attr("cy", d => yLinearScale(d.healthcare))
      .attr("r", "15")
      .attr("fill", "blue")
      .attr("opacity", "0.25")
      .attr("stroke-width", "1")
      .attr("stroke", "black");

    /* Create the text for each block */
    var circleLabels = chartGroup.selectAll("circle")
      .data(data)
      .enter()
      .append("text")
      .text(data => {return data.state});

     // Create axes labels
     chartGroup.append("text")
     .attr("transform", "rotate(-90)")
     .attr("y", 0 - margin.left)
     .attr("x", 0 - (height / 1.5))
     .attr("dy", "1em")
     .attr("class", "axisText")
     .text("Lacks HealthCare (%) ");

    chartGroup.append("text")
     .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
     .attr("class", "axisText")
     .text("In Poverty (%)");

  }).catch(function(error) {
    console.log(error);
});

  