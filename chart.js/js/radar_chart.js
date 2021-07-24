// Grab the data: will be flask api 
var accidents_url = "../../data/ca_accidents.csv";
// var accidents_url = "/accidents";
// var weather_url = "../../data/ca_weather.csv";
// STEP 1: called by draw plotly & update plotly
// FUNCTION: CREATE OBJECT TO USE
function createObject(filteredData) {

    // // Initialize objects for aggregating counts by weekday & time of day
    // var early_morning = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}}};
    
    // var morning = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}}};

    // var afternoon = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}}};
    
    // var evening = {"Sunday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Monday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Tuesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Wednesday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Thursday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Friday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}},
    // "Saturday": {"total": {"count": 0}, "visibility": {"count": 0, "sum": 0}, "severity": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "weather_severity": {"count": 0, "Severe": 0, "Light": 0, "Heavy": 0, "Moderate": 0, "Other": 0, "UNK": 0}}};

var weatherResults = {};

weatherResults.clear = {"severity": {"sum": 0}, "precipitation": {"sum": 0}, "wind_speed": {"sum": 0}, "visibility": {"sum": 0}};
weatherResults.overcast = {"severity": {"sum": 0}, "precipitation": {"sum": 0}, "wind_speed": {"sum": 0}, "visibility": {"sum": 0}};
weatherResults.light_rain = {"severity": {"sum": 0}, "precipitation": {"sum": 0}, "wind_speed": {"sum": 0}, "visibility": {"sum": 0}};
weatherResults.heavy_rain = {"severity": {"sum": 0}, "precipitation": {"sum": 0}, "wind_speed": {"sum": 0}, "visibility": {"sum": 0}};
weatherResults.snow = {"severity": {"sum": 0}, "precipitation": {"sum": 0}, "wind_speed": {"sum": 0}, "visibility": {"sum": 0}};


console.log(weatherResults);

// filteredData: change to how you defined your data when you called
for (var i = 0; i < filteredData.length; i++) {

    var visibility = filteredData[i].visibility;
    var severity = filteredData[i].severity;
    var wind_speed = filteredData[i].wind_speed;
    var precipitation = filteredData[i].precipitation;
    var weather_condition = filteredData[i].weather_condition;


if (weather_condition === "Clear") {
    weatherResults.clear.severity.sum +=severity;
    weatherResults.clear.precipitation.sum +=precipitation;
    weatherResults.clear.wind_speed.sum += wind_speed;
    weatherResults.clear.visibility.sum +=visibility;
}
else if (weather_condition === "Overcast") {
    weatherResults.overcast.severity.sum +=severity;
    weatherResults.overcast.precipitation.sum +=precipitation;
    weatherResults.overcast.wind_speed.sum +=wind_speed;
    weatherResults.overcast.visibility.sum +=visibility;
}
else if (weather_condition === "Light Rain") {
    weatherResults.light_rain.severity.sum +=severity;
    weatherResults.light_rain.precipitation.sum +=precipitation;
    weatherResults.light_rain.wind_speed.sum +=wind_speed;
    weatherResults.light_rain.visibility.sum +=visibility;
}
else if (weather_condition === "Heavy Rain") {
    weatherResults.heavy_rain.severity.sum +=severity;
    weatherResults.heavy_rain.precipitation.sum +=precipitation;
    weatherResults.heavy_rain.wind_speed.sum +=wind_speed;
    weatherResults.heavy_rain.visibility.sum +=visibility;
}
else if (weather_condition === "Snow") {
    weatherResults.snow.severity.sum +=severity;
    weatherResults.snow.precipitation.sum +=precipitation;
    weatherResults.snow.wind_speed.sum +=wind_speed;
    weatherResults.snow.visibility.sum +=visibility;
};
}
    console.log(weatherResults);

    return(weatherResults);
}

d3.csv(accidents_url).then(function(filteredData) {

    // Loop through each data point to convert
    filteredData.forEach(data => {
        // Convert string variables to numbers
        data.visibility = +data.visibility;
        data.severity = +data.severity;
        data.wind_speed = +data.wind_speed;
        data.precipitation = +data.precipitation;
    });
// function trial_func(weatherResults) {
    var clear = [];
    var heavy_rain = [];
    var light_rain = [];
    var overcast = [];
    var snow = [];

    var weatherResults = createObject(filteredData);
    console.log(weatherResults);

    var weather = ["clear", "heavy_rain", "light_rain", "snow", "overcast"];

    console.log("test", weatherResults.clear);


        // Separate calculations by time category
            clear.push(weatherResults.clear.severity.sum);
            clear.push(weatherResults.clear.precipitation.sum);
            clear.push(weatherResults.clear.wind_speed.sum);
            clear.push(weatherResults.clear.visibility.sum);
        
            heavy_rain.push(weatherResults.heavy_rain.severity.sum);
            heavy_rain.push(weatherResults.heavy_rain.precipitation.sum);
            heavy_rain.push(weatherResults.heavy_rain.wind_speed.sum);
            heavy_rain.push(weatherResults.heavy_rain.visibility.sum);

            light_rain.push(weatherResults.light_rain.severity.sum);
            light_rain.push(weatherResults.light_rain.precipitation.sum);
            light_rain.push(weatherResults.light_rain.wind_speed.sum);
            light_rain.push(weatherResults.light_rain.visibility.sum);
    
            overcast.push(weatherResults.overcast.severity.sum);
            overcast.push(weatherResults.overcast.precipitation.sum);
            overcast.push(weatherResults.overcast.wind_speed.sum);
            overcast.push(weatherResults.overcast.visibility.sum);
    
            snow.push(weatherResults.snow.severity.sum);
            snow.push(weatherResults.snow.precipitation.sum);
            snow.push(weatherResults.snow.wind_speed.sum);
            snow.push(weatherResults.snow.visibility.sum);
    // return([clear, overcast, light_rain, heavy_rain, snow])
// }
console.log(clear);

// ARRAYS FOR ITERATION (x & y)
// Define a days of the week array
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Define a time categories array
var timeCategories = ['early_morning', 'morning', 'afternoon', 'evening'];
// Array to hold selected filter options
var filterArray = [];
var selectionArray = [];
var filteredDataArray = [];


    $(document).ready(function() {
    
        var weatherResults = createObject(filteredData);
    

        console.log(clear);

        // console.log(trial);
    
    var ctx = $("#chart-line");
    var myChartLine = new Chart(ctx, {
    type:'radar',
    data:{
    
    labels:["Severity","Precipitation", "Wind Speed", "Visibility"],
    
    datasets:[{
        data: clear,
        label:"Clear",
        borderColor:"#E6F13C",
        // backgroundColor:"#458af7",
        fill:true
    }, {
        data: overcast,
        label:"Overcast",
        borderColor:"#87A796",
        // backgroundColor:"#87A796",
        fill:true
    }, {
        data:light_rain,
        label:"Light Rain",
        borderColor:"#27D2E3",
        // backgroundColor:"#27D2E3",
        fill:true
    }, {
        data:heavy_rain,
        label:"Heavy Rain",
        borderColor:"#2774E3",
        fill:true
    }, {
        data:snow,
        label:"Snow",
        borderColor:"#000000",
        fill:true
    }]
    
    },
    options:{
        title:{
    
            display:true,
            text:"Average Accident Info Per Weather Condition"
        }
    }
    })
    });

    
});