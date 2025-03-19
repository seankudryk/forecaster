const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");

export const displayData = (dataObject) => { 
    cityName.textContent = dataObject.address;
    
    fullLocationName.textContent = dataObject.resolvedAddress;
    currentTemperature.textContent = dataObject.currentConditions.temp;

}