import { getData } from './app-logic.js';
import { displayData } from './display.js';
import "./styles.css";

const submitButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#search-input");
const degreeCheckbox = document.querySelector("#degree-checkbox");

const handleData = (userInput) => {
    if (!userInput) {
        searchInput.setCustomValidity("Invalid Search Term, Please try again");
        console.warn("Invalid search term");
        return;
    } else {
        const requestData = getData(userInput);
    
        requestData.then(response => {
            console.log(response);
            function WeatherData(cityName, fullLocationName, currentTemperature, currentHigh, currentLow, currentConditions) {
                this.cityName = cityName;
                this.fullLocationName = fullLocationName;

                //immutable values from API call that will be returned when degress F is selected (or, when degreeCheckbox is "checked")
                this.originalTemperature = currentTemperature;
                this.originalHigh = currentHigh;
                this.originalLow = currentLow;

                //mutable values to be used to convert original call in degrees Fahrenheit to degrees Celsius
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
                    this.currentTemperature = this.originalTemperature.toFixed(1);
                    this.currentHigh = this.originalHigh.toFixed(1);
                    this.currentLow = this.originalLow.toFixed(1);
                    this.roundedCurrentTemperature = Math.round(this.originalTemperature);
                }
            };

            searchInput.setCustomValidity("");
    
            const storedData = new WeatherData(
                response.address, 
                response.resolvedAddress, 
                response.currentConditions.temp, 
                response.days[0].tempmax, 
                response.days[0].tempmin, 
                response.currentConditions.conditions,
            );
    
            if (degreeCheckbox.checked) {
                displayData(storedData);
            } else {
                storedData.toCelsius();
                console.log(storedData);
                displayData(storedData);
            }
    
            degreeCheckbox.addEventListener("click", () => {
                if (degreeCheckbox.checked) {
                    storedData.toFahrenheit();
                    displayData(storedData);
                } else {
                    storedData.toCelsius();
                    displayData(storedData);
                }
            });
        })
        .catch(error => {
            console.error("Fetch failed", error);
            searchInput.setCustomValidity("Invalid Search Term, Please try again");
        });
    };
}

submitButton.addEventListener("click", (event) => {
    //prevent default submit conditions from firing when the button is clicked so we can do our own event handling
    event.preventDefault();
    
    handleData(searchInput.value);
    searchInput.value = "";
});

handleData("Toronto");



