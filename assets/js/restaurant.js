//restaurant API
const optionsRestaurant = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05d81c5989msh45cb458ac7037cap13e23djsn621d2bb57bd9",
    "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
  },
};

function restaurantApi() {
  var cityName = cityInput.value;
  var country = countryInput.value;
  console.log(cityName, country);
  fetch(
    "https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=" +
      cityName +
      "," +
      country,
    optionsRestaurant
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok...");
      }
      return response.json();
    })
    .then(function (data) {
      cityId(data.data.geolocation[0].id.id);
    });
}

function cityId(x) {
  console.log(x);
  fetch(
    "https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=" +
      x +
      "&geo_ref=false&geo_type=locality",
    optionsRestaurant
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok...");
      }
      return response.json();
    })
    .then(function (data) {
      restaurantList(data.id_city);
      // produceCard(data.data);
    });
}

function restaurantList(x) {
  fetch(
    "https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=" +
      x +
      "&pageSize=9&pageNumber=1",
    optionsRestaurant
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok...");
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log(data); // Process the parsed data
      produceRestaurantCard(data.data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

//create cards

function produceRestaurantCard(data) {
  console.log(data);
  console.log("produceCard works");
  //card container
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";
  //proforate items
  for (let index = 0; index < 9; index++) {
    // let card = document.querySelector(".card-body");
    let restaurantName = document.createElement("h5");
    restaurantName.textContent = `Name: ${data[index].name}`;

    let cuisineType = document.createElement("div");
    cuisineType.textContent = `cuisineType: ${data[index].servesCuisine} `;

    let address = document.createElement("div");
    address.textContent = `address: ${data[index].address.street}, ${data[index].address.postalCode} `;

    let card = document.createElement("div");
    card.classList.add("card-body", "col-2", "p-2", "mx-2");
    cardContainer.appendChild(card);
    card.appendChild(restaurantName);
    card.appendChild(cuisineType);
    card.appendChild(address);
  }
}
