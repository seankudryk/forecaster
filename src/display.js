const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");

export const displayData = (dataObject) => { 
    cityName.textContent = dataObject.cityName;
    fullLocationName.textContent = dataObject.fullLocationName;
    currentTemperature.textContent = dataObject.currentTemperature;
    currentHigh.textContent = dataObject.currentHigh;
    currentLow.textContent = dataObject.currentLow;
    currentConditions.textContent = dataObject.currentConditions;   
}