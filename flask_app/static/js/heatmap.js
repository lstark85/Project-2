// Grab the data: will be flask api 
// var accidents_url = "../../data/ca_accidents.csv";
// var weather_url = "../../data/ca_weather.csv";
var accidents_url = "/accidents";
var weather_url = "/weather";


// ARRAYS FOR ITERATION (x & y)
// Define a days of the week array
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Define a time categories array
var timeCategories = ['early_morning', 'morning', 'afternoon', 'evening'];
// Array to hold selected filter options
var filterArray = [];
var selectionArray = [];
var filteredDataArray = [];

// STEP 1: called by draw plotly & update plotly
// FUNCTION: CREATE OBJECT TO USE
function createObject(filteredData) {

    // Initialize objects for aggregating counts by weekday & time of day
    var early_morning = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}}};
    
    var morning = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}}};

    var afternoon = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}}};
    
    var evening = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}},
    "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}}};

    // Define a days of the week object and add objects to it
    var weekResults = {};
    weekResults.early_morning = early_morning;
    weekResults.morning = morning;
    weekResults.afternoon = afternoon;
    weekResults.evening = evening;

    // Loop through data
    for (var i = 0; i < filteredData.length; i++) {

        // Get variables (for z)
        var visibility = filteredData[i].visibility;
        var severity = filteredData[i].severity;
        var wind_speed = filteredData[i].wind_speed;
        var precipitation = filteredData[i].precipitation;

        // Get date & time variables (for x & y)
        var date = filteredData[i].date;
        var day_of_week = moment(date).format('dddd');
        var time = filteredData[i].time;
        var time_category = categorizeTime(time);
    
        // Loop to add to weekly object
        // Looping through each time category (4)
        for (var x = 0; x < timeCategories.length; x++) {
            
            if (time_category === timeCategories[x]) {

                // Add to days of the week object
                // Looping through each day of the week (7)
                for (var y = 0; y < daysOfTheWeek.length; y++) {

                    if (day_of_week === daysOfTheWeek[y]) {
                        // Define current day
                        var this_day = daysOfTheWeek[y];

                        // Add to day count (each time iterated)
                        weekResults[time_category][this_day].total.count+=1

                        // If visibility exists
                        if (visibility) {
                            // Add to visibility day count
                            weekResults[time_category][this_day].visibility.sum+=visibility;
                            weekResults[time_category][this_day].visibility.count+=1;
                        }

                        // If severity exists
                        if (severity) {
                            // Add to severity day count
                            weekResults[time_category][this_day].severity.sum+=severity;
                            weekResults[time_category][this_day].severity.count+=1;
                        }

                        // If wind speed exists
                        if (wind_speed) {
                            // Add to wind speed day count
                            weekResults[time_category][this_day].wind_speed.sum+=wind_speed;
                            weekResults[time_category][this_day].wind_speed.count+=1;
                        }

                        // If precipitation
                        if (precipitation) {
                            // Add to precipitation day count
                            weekResults[time_category][this_day].precipitation.sum+=precipitation;
                            weekResults[time_category][this_day].precipitation.count+=1;
                        }
                    }
                }
            };
        }
    }

    // Print object
    // console.log("Aggregate Object:")
    // console.log(weekResults);

    // CODE TO MAKE BASE OBJECT A JSON STRING (FOR QUICKER INITIALIZING)
    // var jsonObject = JSON.stringify(weekResults);
    // console.log(jsonObject);

    // Return object
    return(weekResults);
};

// STEP 2: called by create plotly and update plotly
// Function to calculate aggregate functions
function calculate(object) {

    // Define options array for iteration
    datasetOptions = ["count", "severity", "visibility", "wind_speed", "precipitation"];

    // Define array for z datasets
    var z = [];

    // For each option, complete calculations
    datasetOptions.forEach(datasetOption => {

        // Define arrays for vis
        var early_morning_time = [];
        var morning_time = [];
        var afternoon_time = [];
        var evening_time = [];

        // COMPLETE CALCULATIONS FOR VIS
        // Loop through time categories
        for (var y = 0; y < timeCategories.length; y++) {
            // Loop through days of the week
            for (var x = 0; x < daysOfTheWeek.length; x++) {
            
                // Define the type of calculation
                if (datasetOption === "count") {
                    var calculation = object[timeCategories[y]][daysOfTheWeek[x]].total.count;
                }
                else {
                    var calculation = object[timeCategories[y]][daysOfTheWeek[x]][datasetOption].sum / object[timeCategories[y]][daysOfTheWeek[x]][datasetOption].count;
                    var calculation = calculation.toFixed(2);
                };

                // Separate calculations by time category
                if (timeCategories[y] === "early_morning") {
                    // push calculation to array
                    early_morning_time.push(calculation);
                }
                else if (timeCategories[y] === "morning") {
                    // push calculation to array
                    morning_time.push(calculation);
                }    
                else if (timeCategories[y] === "afternoon") {
                    // push calculation to array
                    afternoon_time.push(calculation);
                }      
                else if (timeCategories[y] === "evening") {
                    // push calculation to array
                    evening_time.push(calculation);
                };           
            };
        };
        // Array of arrays for "z" in vis
        z.push([early_morning_time, morning_time, afternoon_time, evening_time]);
    });
    // console.log("z", z);
    // Return array for vis
    return(z);
}; 

// ONLY RUNS AT BEGINNING
// Function to initialize the plotly vis
function drawPlotly(data, option) {
    // Pull data from saved json file
    // d3.json("../../data/weekObject.json").then(function(data) {
        // var weekResults = data;
    
    // Builds the initial object for the plot
    var weekResults = createObject(data);

    // Get z from calculate function for vis
    var z_array = calculate(weekResults, option);

    // Define which array will be plotted
    if (option === "Accident Count") {
        var z = z_array[0];
    }
    // Define color scale for the rest of the plots
    var colorscaleValue = [
        [0, '#feb24c'],
        [1, '#f03b20']
    ];
    
    // DEFINE MAP OBJECTS FOR MAPPING
    // Heat map:
    var data = [
        {
            z: z,
            x: daysOfTheWeek,
            y: timeCategories,
            type: 'heatmap',
            colorscale: colorscaleValue,
            hoverongaps: false
        }
    ];

    // Define layout
    var layout = { xaxis: {automargin: true, title: { text:"Days of the Week", font: { size: 18 }}},   
                    yaxis: {automargin: true, title: { text:"Time of Day", font: { size: 18 }}},
                    title: {
                        text:'Number of Accidents',
                        font: {
                            size: 24
                        }},
                    annotations: []}

    // Loop to create annotations
    for ( var i = 0; i < timeCategories.length; i++ ) {
        for ( var j = 0; j < daysOfTheWeek.length; j++ ) {
            var currentValue = z[i][j];
            if (currentValue != 0.0) {
                var textColor = 'white';
            }
            else {
                var textColor = 'black';
            }
            var result = {
                xref: 'x1',
                yref: 'y1',
                x: daysOfTheWeek[j],
                y: timeCategories[i],
                text: z[i][j],
                font: {
                    family: 'Arial',
                    size: 12,
                    color: 'rgb(50, 171, 96)'
                },
                showarrow: false,
                font: {
                    color: textColor
                }
            };
            layout.annotations.push(result);
        }
    };

    // Return new plot
    return(Plotly.newPlot('myDiv', data, layout));
    // })
};

// STEP 4: called by anonymous functions (on click)
// Function to update chart; (data: dataset, option: type of calculation selected)
function updatePlotly(data, option) {
    // Prevent page from refreshing
    d3.event.preventDefault();

    // If data is already filtered by city
    if (filteredDataArray.length > 0) {
        var data = filteredDataArray[0];
    };

    // Create object of values (with new data)
    var weekResults = createObject(data);

    // Calculate new aggregate functions
    var z_array = calculate(weekResults);
    // console.log(z_array);

    // Define color scale for the rest of the plots
    var colorscaleValue = [
        [0, '#feb24c'],
        [1, '#f03b20']
    ];

    // Use selected option to define which dataset will be drawn
    if (option === "accident-count") {
        var z = z_array[0];
        var title = "Number of Accidents";
    }
    else if (option === "average-severity") {
        var z = z_array[1];
        var title = "Average Severity of Accidents";
    }
    else if (option === "average-visibility") {
        var z = z_array[2];
        var title = "Average Visibility of Day (in miles)";

        // Define color scale for visibility (opposite)
        var colorscaleValue = [
            [0, '#f03b20'],
            [1, '#feb24c']
        ];
    }
    else if (option === "average-windspeed") {
        var z = z_array[3];
        var title = "Average Wind Speed of Day (in mph)";
    }
    else if (option === "average-precipitation") {
        var z = z_array[4];
        var title = "Average Precipitation of Day (in inches)";
    };

    // console.log(z);

    // Initialize annotation array for updating
    var annotations = [];
    
    // Update annotations for new dataset
    for (var i = 0; i < timeCategories.length; i++ ) {
        for (var j = 0; j < daysOfTheWeek.length; j++ ) {
            var currentValue = z[i][j];
            if (currentValue != 0.0) {
                var textColor = 'white';
            }
            else {
                var textColor = 'black';
            }
            var result = {
                xref: 'x1',
                yref: 'y1',
                x: daysOfTheWeek[j],
                y: timeCategories[i],
                text: z[i][j],
                font: {
                    family: 'Arial',
                    size: 12,
                    color: 'rgb(50, 171, 96)'
                },
                showarrow: false,
                font: {
                    color: textColor
                }
            };
            // Push new annotations
            annotations.push(result);
        }
    };

    // Update object for new title & annotations
    var update = {
        title: title,
        annotations: annotations 
    };

    // Restyle the vis
    Plotly.restyle("myDiv", "z", [z]);
    Plotly.restyle("myDiv", "colorscale", [colorscaleValue]);
    Plotly.relayout("myDiv", update);

    // Log when the chart will be updated
    // console.log("Updating chart...");
};

// Function to categorize time: called in createObject
function categorizeTime(time) {
    // Create separate categorical arrays
    if (time >= "00:00:00" && time <= "06:00:00") {
        return("early_morning");
    }
    else if (time > "06:00:00" && time <= "12:00:00") {
        return("morning");
    }
    else if (time > "12:00:00" && time <= "18:00:00") {
        return("afternoon");
    }
    else if (time > "18:00:00" && time <= "24:00:00") {
        // evening.push(time);
        return("evening");
    };
};

// Function to create table underneath plot
function createTable(filteredData) {

    // Select the table titles & add to them
    var table_title = d3.select("#table-title");
    var table_subtitle = d3.select("#table-subtitle");
    table_title.html("<h2>Accidents Report</h2>");
    table_subtitle.html(`<h3>${filteredData[0].city}</h3>`);
    
    // Select the tbody in the html table
    var tbody = d3.select("tbody");

    // Reset the html table
    tbody.html("");

    // Append a row to the tbody
    var row = tbody.append("tr");

    // Array of row titles
    var row_titles = ["date", "time", "city", "severity", "visibility", "wind_speed", "precipitation", "weather_condition", "description"];

    // Append titles for each column
    row_titles.forEach(element => {
        var title = row.append("th").text(element);
        
    });

    // for each accident in the filtered data, append a row
    filteredData.forEach(accident => {

        // Append a row to the tbody
        var row = tbody.append("tr");

        // Append a row for each data element
        row_titles.forEach(element => {
            if (element === "date") {
                // Accident data's date
                var date = moment(accident[element]).format('L');
                var data_cell = row.append("td").text(date);
            }
            // If the row is not a date
            else if (element !== "date") {
                var data_cell = row.append("td").text(accident[element]);
            };
            
        });
    });
};

// LOADING DATA
// Load the data: will be d3.json
d3.json(accidents_url).then(function(accidents_data) {

    // Print the object results
    // console.log(accidents_data);

    // Loop through each data point to convert
    accidents_data.forEach(data => {
        // Convert string variables to numbers
        data.visibility = +data.visibility;
        data.severity = +data.severity;
        data.wind_speed = +data.wind_speed;
        data.precipitation = +data.precipitation;

    });

    // D3: select
    // Select dropdowns & reset button on page
    var cityDropdown = d3.select("#cityDropdown");
    var resetButton = d3.select("#reset-button");

    // Type of Calculation Buttons
    var countButton = d3.select("#accident-count");
    var visibilityButton = d3.select("#average-visibility");
    var severityButton = d3.select("#average-severity");
    var windSpeedButton = d3.select("#average-windspeed");
    var precipButton = d3.select("#average-precipitation");

    // APPENDING OPTIONS TO DROPDOWNS
    // Create an array of city names for dropdown
    var cityNames = accidents_data.map(data => data.city);
    // Remove blank city name
    cityNames = cityNames.filter(d => d !== "");
    // Sort the array
    cityNames.sort();

    // GET RID OF DUPLICATES
    // Convert the array to a set
    var setCityNames = new Set(cityNames);
    // Convert the set back into an array
    var uniqueCityNames = Array.from(setCityNames);

    // For each city, append the name to a dropdown attribute
    uniqueCityNames.forEach(city => {
        //console.log(city);
        var item = cityDropdown.append("option");
        item.attr("class", "dropdown-item");
        item.attr("id", city);
        item.text(city);
    });
    
    // When RESET Button is clicked
    resetButton.on("click", function() {
        // RESET data & selected option
        var option = "accident-count";

        // Reset filter array
        filterArray = [];
        filteredDataArray = [];
        selectionArray = [];

        // Update the visualization (RESET)
        updatePlotly(accidents_data, option);

        // RESET titles
        d3.select(".btn-city").text("City");
        d3.select("#table-title").html("");
        d3.select("#table-subtitle").html("");

        // Reset table
        // Select the tbody in the html table
        var tbody = d3.select("tbody");
        // Reset the html table
        tbody.html("");

        // Change active button
        countButton.classed("active", true);
        visibilityButton.classed("active", false);
        severityButton.classed("active", false);
        windSpeedButton.classed("active", false);
        precipButton.classed("active", false);
    });

    // BUTTONS
    // d3.selectAll("#dropdownMenuButton").on("click", function() {
        d3.selectAll(".btn-action").on("click", function() {

        // Define selected button
        var selButton = d3.select(this);
        var selButtonID = selButton.attr("id");

        // If dropdown is clicked
        if (selButtonID === "dropdownMenuButton") {
            var selButtonValue = selButton.attr("value");
        }
        // Set elements on page to match the chosen selection
        else if (selButtonID === "accident-count") {
            // Change selected option
            var selection = "Accident Count";

            // Add to value to array
            selectionArray.splice(0, 1, selection);

            // Change active button
            countButton.classed("active", true);
            visibilityButton.classed("active", false);
            severityButton.classed("active", false);
            windSpeedButton.classed("active", false);
            precipButton.classed("active", false);

            updatePlotly(accidents_data, selButtonID);
        }
        else if (selButtonID === "average-visibility") {
            // Change selected option
            var selection = "Average Visibility";

            // Add to value to array
            selectionArray.splice(0, 1, selection);
            
            // Change active button
            visibilityButton.classed("active", true);
            countButton.classed("active", false);
            severityButton.classed("active", false);
            windSpeedButton.classed("active", false);
            precipButton.classed("active", false);

            updatePlotly(accidents_data, selButtonID);
        }
        else if (selButtonID === "average-severity") {
            // Change selected option
            var selection = "Average Severity";

            // Add to value to array
            selectionArray.splice(0, 1, selection);

            // Change active button
            severityButton.classed("active", true);
            countButton.classed("active", false);
            visibilityButton.classed("active", false);
            windSpeedButton.classed("active", false);
            precipButton.classed("active", false);

            updatePlotly(accidents_data, selButtonID);
        }
        else if (selButtonID === "average-windspeed") {
            // Change selected option
            var selection = "Average Wind Speed";

            // Add to value to array
            selectionArray.splice(0, 1, selection);

            // Change active button
            windSpeedButton.classed("active", true);
            countButton.classed("active", false);
            severityButton.classed("active", false);
            visibilityButton.classed("active", false);
            precipButton.classed("active", false);

            updatePlotly(accidents_data, selButtonID);
        }
        else if (selButtonID === "average-precipitation") {
            // Change selected option
            var selection = "Average Precipitation";

            // Add to value to array
            selectionArray.splice(0, 1, selection);

            // Change active button
            precipButton.classed("active", true);
            countButton.classed("active", false);
            severityButton.classed("active", false);
            windSpeedButton.classed("active", false);
            visibilityButton.classed("active", false);

            updatePlotly(accidents_data, selButtonID);
        };    

        // console.log("Option Selected:", selection);

        // DROPDOWN SELECTIONS
        d3.selectAll("option").on("click", function() {
            var selOption = d3.select(this).text();
            console.log("SELECTION: ", selOption);

            // City filter: for accidents
            var filteredData = accidents_data.filter(element => element.city === selOption); 

            // Change text of button
            selButton.text(selOption);

            // Define current data filter option
            var selection = d3.select(".active").attr("id");
        
            // console.log("Current Selection:", selection);

            // Exporting filtered data to a list to have global access
            filteredDataArray.splice(0, 1, filteredData);

            // Update Chart & Create HTML Table
            updatePlotly(filteredData, selection);
            createTable(filteredData);
        });
            // Define the current selection
            var selection = selectionArray[0];

            // Check values
            // console.log("Filtered Data: ");
            // console.log(filteredData);
            // console.log("Current Selection:", selection);
    });

    // Set the first current option
    var current_option = "Accident Count";

    // Initialize the plot on the page
    drawPlotly(accidents_data, current_option);
}); // End of pulling data
