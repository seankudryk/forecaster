import { getData } from './app-logic.js';
import { displayData } from './display.js';

const submitButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#search-input");

submitButton.addEventListener("click", (event) => {
    //prevent default submit conditions from firing when the button is clicked so we can do our own event handling
    event.preventDefault();

    //call getData, passing the current .value of the searchInput element as argumengetData(searchInput.value);
    const requestData = getData(searchInput.value);

    requestData.then(response => {
        console.log(response);
        function WeatherData(cityName, fullLocationName, currentTemperature, currentHigh, currentLow, currentConditions) {
            this.cityName = cityName;
            this.fullLocationName = fullLocationName;
            this.currentTemperature = currentTemperature;
            this.currentHigh = currentHigh;
            this.currentLow = currentLow; 
            this.currentConditions = currentConditions;
        }

        const storedData = new WeatherData(
            response.address, 
            response.resolvedAddress, 
            response.currentConditions.temp, 
            response.days[0].tempmax, 
            response.days[0].tempmin, 
            response.currentConditions.conditions,
        );

        displayData(storedData);
    })
    .catch(error => {
        console.error("Fetch failed", error);
    });

    //reset input value back to nothing
    searchInput.value = "";
});

