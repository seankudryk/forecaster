import Iconify from '@iconify/iconify';

const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");
const bigTemperature = document.querySelector("#big-temperature");

const generateSVG = (weatherCondition) => {
    let searchTerm;

    if (weatherCondition === "Clear") {
        searchTerm = "day-rain";
    } 

    const svg = Iconify.renderSVG(`wi:${searchTerm}`, {
        height: 180,
        width: 180
    });   
    
    document.body.appendChild(svg);
}


export const displayData = (dataObject) => { 
    cityName.textContent = dataObject.cityName;
    fullLocationName.textContent = dataObject.fullLocationName;
    currentTemperature.textContent = `Current Temperatute: ${dataObject.currentTemperature}\u00B0`;
    currentHigh.textContent = `High: ${dataObject.currentHigh}\u00B0`;
    currentLow.textContent = `Low: ${dataObject.currentLow}\u00B0`;
    currentConditions.textContent = dataObject.currentConditions;   
    bigTemperature.textContent = `${dataObject.currentTemperature}\u00B0`;
    generateSVG(dataObject.currentConditions);
}

