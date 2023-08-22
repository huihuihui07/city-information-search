$(document).ready(function () {
  // Initialising variables and settings elements
  const inputEl = $("input");
  const searchIcon = $("#search");
  console.log(inputEl);

  // OpenWeather icon codes to URLs of corresponding icons
  const iconBaseUrl = "http://openweathermap.org/img/wn/";

  const weatherIcons = {
    "01d": iconBaseUrl + "01d.png", // Clear sky (day)
    "01n": iconBaseUrl + "01n.png", // Clear sky (night)
    "02d": iconBaseUrl + "02d.png", // Few clouds (day)
    "02n": iconBaseUrl + "02n.png", // Few clouds (night)
    "03d": iconBaseUrl + "03d.png", // Scattered clouds
    "03n": iconBaseUrl + "03n.png",
    "04d": iconBaseUrl + "04d.png", // Broken clouds
    "04n": iconBaseUrl + "04n.png",
    "09d": iconBaseUrl + "09d.png", // Shower rain
    "09n": iconBaseUrl + "09n.png",
    "10d": iconBaseUrl + "10d.png", // Rain
    "10n": iconBaseUrl + "10n.png",
    "11d": iconBaseUrl + "11d.png", // Thunderstorm
    "11n": iconBaseUrl + "11n.png",
    "13d": iconBaseUrl + "13d.png", // Snow
    "13n": iconBaseUrl + "13n.png",
    "50d": iconBaseUrl + "50d.png", // Mist
    "50n": iconBaseUrl + "50n.png",
  };

  searchIcon.click(function () {
    console.log("hello");
    let apiKey = "0ed58c658d00ae18f106a86b10fb1f7d";
    const location = inputEl.val();
    let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    // console.log(location)

    // Use OpenWeather API

    $.get(queryUrl, function (weatherData) {
      const forecastList = weatherData.list;

      // display current weather: from OpenWeatherAPI response

      // const currentWeather = forecastList[0];
      // const currentTemperature = currentWeather.main.temp;
      // const currentWeatherDescription = currentWeather.weather[0].description;
      // const currentWeatherIcon = weatherIcons[currentWeather.weather[0].icon];
      // const currentWeatherIconHtml = `<img src="${currentWeatherIcon}" alt="Current Weather Icon">`;

      // display 4-day weather forecast

      let forecastHeading = `<section class='tabs-wrapper'><div class='attractions-tab'>Attractions</div><div class='restaurants-tab'>Restaurants</div><div class='weather-tab'>Weather</div></section>`;
      let cards = ''
      
      for (let i = 0; i <= 5; i++) {
        const forecast = forecastList[i];
        const forecastTemperature = Math.round(forecast.main.temp);
        const forecastWeatherDescription = forecast.weather[0].description;
        const forecastWeatherIcon = weatherIcons[forecast.weather[0].icon];
        const forecastWeatherIconHtml = `<div class='weather-card'><img src="${forecastWeatherIcon}" class='icon' alt="weather icon">`;
        cards += `${forecastWeatherIconHtml}<p>${forecastTemperature}K<p>${forecastWeatherDescription}</p></div>`;
      }
      // Display forecast
      $("#weatherResult").html(forecastHeading);
      $(".weather-card-wrapper").html(cards);
    });
  });
});
