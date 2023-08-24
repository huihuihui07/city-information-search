const searchIcon = document.querySelector("#search");
let selectionButtons = document.querySelector("#selectionButtons");

var cityInput = document.getElementById("cityName");
var countryInput = document.getElementById("country");
var submitForm = document.querySelector(".citySearch");

//display the 3 icons: attractions, restaurants and weather
searchIcon.addEventListener("click", function () {
  let selectionBtnText = `<section class='buttonsAPI d-flex w-100 justify-content-center'>
  <button id='attractions-btn' class='btn btn-dark btn-lg mx-3'>Attractions</button>
  <button id='restaurants-btn' class='btn btn-dark btn-lg  mx-3'>Restaurants</button>
  <button id='weather-btn' class='btn btn-dark btn-lg mx-3'>Weather</button></section>`;
  selectionButtons.innerHTML = selectionBtnText; // Corrected 'innerHTML'

  //click on weather button
  let weatherTap = document.querySelector("#weather-btn");
  weatherTap.addEventListener("click", weatherApi);

  //click on restaurants button
  let restaurantsTab = document.querySelector("#restaurants-btn");
  restaurantsTab.addEventListener("click", restaurantApi);

  //click on attractions button
  let attractionsTab = document.querySelector("#attractions-btn");
  attractionsTab.addEventListener("click", attractionsApi);
});

//clear contents in the api container
function clearApi() {
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";

  let weatherContainer = document.querySelector(".weather-card-wrapper");
  weatherContainer.innerHTML = "";
}
