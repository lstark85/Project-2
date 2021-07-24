// Grab the data: will be flask api 
// var accidents_url = "../../data/ca_accidents.csv";
// var weather_url = "../../data/ca_weather.csv";

var accidents_url = "/accidents";

// ARRAYS FOR ITERATION (x & y)
// Define a days of the week array
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Define a time categories array
var timeCategories = ['early_morning', 'morning', 'afternoon', 'evening'];


// LOADING DATA
// Load the data: will be d3.json
d3.json(accidents_url).then(function(accidents_data) {
    // Print the object results
//    console.log(accidents_data);
    
// Loop through each data point to convert
    accidents_data.forEach(data => {
        // Convert string variables to numbers
        data.visibility = +data.visibility;
        data.severity = +data.severity;
        data.wind_speed = +data.wind_speed;
        data.precipitation = +data.precipitation
    
    });

    var cityDropdown = d3.select("#cityDropdown");
    // Create an array of city names for dropdown
    var cityNames = accidents_data.map(data => data.city);
    // Remove blank city name
    cityNames = cityNames.filter(d => d !== "");
    // Sort the array
    cityNames.sort();

    var setCityNames = new Set(cityNames);
    // Convert the set back into an array
    var uniqueCityNames = Array.from(setCityNames);

    // For each city, append the name to a dropdown attribute
    uniqueCityNames.forEach(city => {
        //console.log(city);
        var item = cityDropdown.append("option");
        item.attr("class", "dropdown-item");
        item.text(city);
    });

 // DROPDOWN BUTTONS
d3.selectAll("#dropdownMenuButton").on("click", function() {
    // Define selected button
    var selButton = d3.select(this);
    var selButtonValue = selButton.attr("value");
    console.log("Button: ", selButtonValue);
    // DROPDOWN SELECTIONS
    d3.selectAll("option").on("click", function() {
    var selOption = d3.select(this).text();
    console.log("SELECTION: ", selOption);

    // Change text of button
    selButton.text(selOption);

    var filteredData = accidents_data.filter(element => element.city === selOption);
    updatePlotly(filteredData);

});
});

    var conditions = accidents_data.map(data => data.weather_condition);
    var allGroup = d3.map(accidents_data, function(d){return(d.weather_condition)}).keys();

    topConditions = ['Clear', 'Mostly Cloudy', 'Haze', 'Partly Cloudy', 'Fair / Windy', 'Overcast', 'Light Rain', 'Rain', 'Heavy Rain', 'Light Snow'];
    console.log(allGroup);
    var condition = [];
    result = { };

    for(var i = 0; i < conditions.length; ++i) {
        if(!result[conditions[i]])
        result[conditions[i]] = 0;
        ++result[conditions[i]];
    }
    console.log(result);

    topConditions.forEach(x => {
        condition.push(result[x])
        });

    console.log(result);


    //Create the Trace
    var trace1 = {
        x: condition,
        y: topConditions,
        type: "bar",
        orientation: 'h'

    };

      // Create the data array for the plot
    var data = [trace1];

      // Define the plot layout
    var layout = {
        title: "City Weather Condition vs Accidents",
        xaxis: { automargin: true, title: "Accidents" },
        yaxis: { automargin: true, title: "Weather Condition" }
    };

      // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);

});

function updatePlotly(newData) {
    // Prevent page from refreshing
    d3.event.preventDefault();

    var cityConditions = newData.map(newData => newData.weather_condition);

    var cityGroup = d3.map(newData, function(d){return(d.weather_condition)}).keys();

    topConditions = ['Clear', 'Mostly Cloudy', 'Haze', 'Partly Cloudy', 'Fair / Windy', 'Overcast', 'Light Rain', 'Rain', 'Heavy Rain', 'Light Snow'];
    
    console.log(cityGroup);
    
    var condition = [];
    result = {};

    for(var i = 0; i < cityConditions.length; ++i) {
        if(!result[cityConditions[i]])
            result[cityConditions[i]] = 0;
            ++result[cityConditions[i]];
        }

    console.log(result);

    topConditions.forEach(x => {
        condition.push(result[x])
        });

        var x = condition;
        var y = topConditions;

        // Restyle the chart to a div tag with id "bar-plot"
        Plotly.restyle("bar-plot", "x", [x]);
        Plotly.restyle("bar-plot", "y", [y]);

}
