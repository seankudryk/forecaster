const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");

export const displayData = (dataObject) => { 
    cityName.textContent = dataObject.cityName;
    fullLocationName.textContent = dataObject.fullLocationName;
    currentTemperature.textContent = `Current Temperatute: ${dataObject.currentTemperature}\u00B0`;
    currentHigh.textContent = `High: ${dataObject.currentHigh}\u00B0`;
    currentLow.textContent = `Low: ${dataObject.currentLow}\u00B0`;
    currentConditions.textContent = dataObject.currentConditions;   
}