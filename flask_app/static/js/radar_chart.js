// Grab the data: will be flask api 

var accidents_url = "/accidents";
// var weather_url = "../../data/ca_weather.csv";
// STEP 1: called by draw plotly & update plotly
// FUNCTION: CREATE OBJECT TO USE
function createObject(filteredData) {

var weatherResults = {};

weatherResults.clear = {"total": {"count": 0}, "severity": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "visibility": {"count": 0, "sum": 0}};
weatherResults.overcast = {"total": {"count": 0},"severity": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "visibility": {"count": 0, "sum": 0}};
weatherResults.light_rain = {"total": {"count": 0},"severity": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "visibility": {"count": 0, "sum": 0}};
weatherResults.heavy_rain = {"total": {"count": 0},"severity": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "visibility": {"count": 0, "sum": 0}};
weatherResults.snow = {"total": {"count": 0},"severity": {"count": 0, "sum": 0}, "precipitation": {"count": 0, "sum": 0}, "wind_speed": {"count": 0, "sum": 0}, "visibility": {"count": 0, "sum": 0}};


console.log(weatherResults);

// filteredData: change to how you defined your data when you called
for (var i = 0; i < filteredData.length; i++) {

    var visibility = filteredData[i].visibility;
    var severity = filteredData[i].severity;
    var wind_speed = filteredData[i].wind_speed;
    var precipitation = filteredData[i].precipitation;
    var weather_condition = filteredData[i].weather_condition;


if (weather_condition === "Clear") {
    if (visibility) {
        weatherResults.clear.visibility.count +=1;
        weatherResults.clear.visibility.sum +=visibility;
    }
    if (severity) {
        weatherResults.clear.severity.sum +=severity;
        weatherResults.clear.severity.count +=1;
    }
    if (wind_speed) {
        weatherResults.clear.wind_speed.sum +=wind_speed;
        weatherResults.clear.wind_speed.count +=1;
    }
    if (precipitation) {
        weatherResults.clear.precipitation.sum +=precipitation;
        weatherResults.clear.precipitation.count +=1;
    }
    
    weatherResults.clear.total.count +=1;

}
else if (weather_condition === "Overcast") {
    if (visibility) {
        weatherResults.overcast.visibility.sum +=visibility;
        weatherResults.overcast.visibility.count +=1;
    }
    if (severity) {
        weatherResults.overcast.severity.sum +=severity;
        weatherResults.overcast.severity.count +=1;
    }
    if (wind_speed) {
        weatherResults.overcast.wind_speed.sum +=wind_speed;
        weatherResults.overcast.wind_speed.count +=1;
        
    }
    if (precipitation) {
        weatherResults.overcast.precipitation.sum +=precipitation;
        weatherResults.overcast.precipitation.count +=1;
    }


    weatherResults.overcast.total.count +=1;
}
else if (weather_condition === "Light Rain") {
    if (visibility) {
        weatherResults.light_rain.visibility.count +=1;
        weatherResults.light_rain.visibility.sum +=visibility;
    }
    if (severity) {
        weatherResults.light_rain.severity.sum +=severity;
        weatherResults.light_rain.severity.count +=1;
    }
    if (wind_speed) {
        weatherResults.light_rain.wind_speed.sum +=wind_speed;
        weatherResults.light_rain.wind_speed.count +=1;
    }
    if (precipitation) {
        weatherResults.light_rain.precipitation.sum +=precipitation;
        weatherResults.light_rain.precipitation.count +=1;
    }

    weatherResults.light_rain.total.count +=1;
}
else if (weather_condition === "Heavy Rain") {
    if (visibility) {
        weatherResults.heavy_rain.visibility.count +=1;
        weatherResults.heavy_rain.visibility.sum +=visibility;
    }
    if (severity) {
        weatherResults.heavy_rain.severity.sum +=severity;
        weatherResults.heavy_rain.severity.count +=1;
    }
    if (wind_speed) {
        weatherResults.heavy_rain.wind_speed.sum +=wind_speed;
        weatherResults.heavy_rain.wind_speed.count +=1;
    }
    if (precipitation) {
        weatherResults.heavy_rain.precipitation.sum +=precipitation;
        weatherResults.heavy_rain.precipitation.count +=1;
    }

    weatherResults.heavy_rain.total.count +=1;
}
else if (weather_condition === "Snow") {
    if (visibility) {
        weatherResults.snow.visibility.count +=1;
        weatherResults.snow.visibility.sum +=visibility;
    }
    if (severity) {
        weatherResults.snow.severity.sum +=severity;
        weatherResults.snow.severity.count +=1;
    }
    if (wind_speed) {
        weatherResults.snow.wind_speed.sum +=wind_speed;
        weatherResults.snow.wind_speed.count +=1;
    }
    if (precipitation) {
        weatherResults.snow.precipitation.sum +=precipitation;
        weatherResults.snow.precipitation.count +=1;
    }

    weatherResults.snow.total.count +=1;
};
}
    console.log(weatherResults);

    return(weatherResults);
}



d3.json(accidents_url).then(function(filteredData) {

    // Loop through each data point to convert
    filteredData.forEach(data => {
        // Convert string variables to numbers
        data.visibility = +data.visibility;
        data.severity = +data.severity;
        data.wind_speed = +data.wind_speed;
        data.precipitation = +data.precipitation;
    });

    var clear = [];
    var heavy_rain = [];
    var light_rain = [];
    var overcast = [];
    var snow = [];

    var weatherResults = createObject(filteredData);
    console.log(weatherResults);

    var weather = ["clear", "heavy_rain", "light_rain", "snow", "overcast"];

    // console.log("test", weatherResults.clear);

    // AVERAGES
    var clear_avg1 = weatherResults.clear.severity.sum / weatherResults.clear.severity.count;
    var clear_avg2 = weatherResults.clear.precipitation.sum / weatherResults.clear.precipitation.count;
    var clear_avg3 = weatherResults.clear.wind_speed.sum / weatherResults.clear.wind_speed.count;
    var clear_avg4 = weatherResults.clear.visibility.sum / weatherResults.clear.visibility.count;
    clear.push(clear_avg1, clear_avg2, clear_avg3, clear_avg4);


    var heavy_rain_avg1 = weatherResults.heavy_rain.severity.sum / weatherResults.heavy_rain.severity.count;
    var heavy_rain_avg2 = weatherResults.heavy_rain.precipitation.sum / weatherResults.heavy_rain.precipitation.count;
    var heavy_rain_avg3 = weatherResults.heavy_rain.wind_speed.sum / weatherResults.heavy_rain.wind_speed.count;
    var heavy_rain_avg4 = weatherResults.heavy_rain.visibility.sum / weatherResults.heavy_rain.visibility.count;
    heavy_rain.push(heavy_rain_avg1, heavy_rain_avg2, heavy_rain_avg3, heavy_rain_avg4);

    var light_rain_avg1 = weatherResults.light_rain.severity.sum / weatherResults.light_rain.severity.count;
    var light_rain_avg2 = weatherResults.light_rain.precipitation.sum / weatherResults.light_rain.precipitation.count;
    var light_rain_avg3 = weatherResults.light_rain.wind_speed.sum / weatherResults.light_rain.wind_speed.count;
    var light_rain_avg4 = weatherResults.light_rain.visibility.sum / weatherResults.light_rain.visibility.count;
    light_rain.push(light_rain_avg1, light_rain_avg2, light_rain_avg3, light_rain_avg4);

    var overcast_avg1 = weatherResults.overcast.severity.sum / weatherResults.overcast.severity.count;
    var overcast_avg2 = weatherResults.overcast.precipitation.sum / weatherResults.overcast.precipitation.count;
    var overcast_avg3 = weatherResults.overcast.wind_speed.sum / weatherResults.overcast.wind_speed.count;
    var overcast_avg4 = weatherResults.overcast.visibility.sum / weatherResults.overcast.visibility.count;
    overcast.push(overcast_avg1, overcast_avg2, overcast_avg3, overcast_avg4);

    var snow_avg1 = weatherResults.snow.severity.sum / weatherResults.snow.severity.count;
    var snow_avg2 = weatherResults.snow.precipitation.sum / weatherResults.snow.precipitation.count;
    var snow_avg3 = weatherResults.snow.wind_speed.sum / weatherResults.snow.wind_speed.count;
    var snow_avg4 = weatherResults.snow.visibility.sum / weatherResults.snow.visibility.count;
    snow.push(snow_avg1, snow_avg2, snow_avg3, snow_avg4);

    
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