import { getData } from './app-logic.js';
import { displayData } from './display.js';
import "./styles.css";

const submitButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#search-input");
const degreeCheckbox = document.querySelector("#degree-checkbox");

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
            this.roundedCurrentTemperature = Math.round(currentTemperature);
            this.currentHigh = currentHigh;
            this.currentLow = currentLow; 
            this.currentConditions = currentConditions;
            this.toCelsius = () => {
                this.currentTemperature = ((currentTemperature - 32) * 5/9).toFixed(1);
                this.currentHigh = ((currentHigh - 32) * 5/9).toFixed(1);
                this.currentLow = ((currentLow - 32) * 5/9).toFixed(1);
                this.roundedCurrentTemperature = Math.round(this.currentTemperature);
            }
            this.toFahrenheit = () => {
                this.currentTemperature = ((currentTemperature * 9/5) + 32).toFixed(1);
                this.currentHigh = ((currentHigh * 9/5) + 32).toFixed(1);
                this.currentLow = ((currentLow * 9/5) + 32).toFixed(1);
                this.roundedCurrentTemperature = Math.round(this.currentTemperature);
            }
        };

        const storedData = new WeatherData(
            response.address, 
            response.resolvedAddress, 
            response.currentConditions.temp, 
            response.days[0].tempmax, 
            response.days[0].tempmin, 
            response.currentConditions.conditions,
        );

        searchInput.setCustomValidity("");

        if (degreeCheckbox.checked) {
            displayData(storedData);
        } else {
            storedData.toCelsius();
            console.log(storedData);
            displayData(storedData);
        }

        degreeCheckbox.addEventListener("click", () => {
            //
            if (degreeCheckbox.checked) {
                storedData.toCelsius();;
                displayData(storedData);
            } else {
                storedData.toFahrenheit();
                displayData(storedData);
            }
        });
    })
    .catch(error => {
        console.error("Fetch failed", error);
        searchInput.setCustomValidity("Invalid Search Term, Please try again");
    });

    //reset input value back to nothing
    searchInput.value = "";
});





