// Initialising variables and settings elements
var searchBtn = $("#panel1");
var CityHistoryList = $("#hisitory");
var CitySearchBtn = $(CityNamesList);
var CurrentDate = dayjs().format("DD/MM/YY");
var CityNamesList = [];
var DeleteBtn = $("<button>");
var queryURL = " ";

// Initialising the app

function initiate() {}
initiate();
// load cities from the local storage

var storedCity = JSON.parse(localStorage).getItem("history");

if (storedCity) {
  CityNamesList = storedCity;

  $("#panel1").on("click", function () {
    $("panel1").slideDown.CityNamesList.attractions.weather;
  });
}

// Function to handle City Search

function findCity(event) {
  event.preventDefault();
  let city = $("#seach-input").val();
  let apiKey = "d800ef61-adc0-4089-a1f7-1d38bed7219f";
  let queryURL = "https://holidayapi.com/v1/holidays";

  // Fetch call to retrieve holiday data
  fetch(queryURL)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
