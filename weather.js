$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<p>Current Temperature is " + data.currently.temperature + " degrees.  " + data.daily.data[0].summary +
                  "<p><strong>Weekly Forecast: </strong>" + data.daily.summary +
                  "<p><strong>Tomorrow: </strong>" + data.daily.data[1].summary + "  High of " + data.daily.data[1].temperatureMax + " degrees" +
                  "<p><strong>Friday: </strong>" + data.daily.data[2].summary + "  High of " + data.daily.data[2].temperatureMax + " degrees" +
                  "<p><strong>Saturday: </strong>" + data.daily.data[3].summary + "  High of " + data.daily.data[3].temperatureMax + " degrees" +
                  "<p><strong>Sunday: </strong>" + data.daily.data[4].summary + "  High of " + data.daily.data[4].temperatureMax + " degrees" +
                  "<p><strong>Monday: </strong>" + data.daily.data[5].summary + "  High of " + data.daily.data[5].temperatureMax + " degrees"
    ;



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
