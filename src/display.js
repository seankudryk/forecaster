import Iconify from '@iconify/iconify';

const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");
const bigTemperature = document.querySelector("#big-temperature");

const weatherConditionImage = document.querySelector("#weather-condition-image");

const generateSVG = (weatherCondition) => {

    let searchTerm = weatherCondition.replace(/\s+/g, "").toLowerCase();

    console.log(searchTerm);

    const weatherConditionMap = {
        clear: "wi:day-sunny",
        overcast: "wi:cloudy",
        partiallycloudy: "wi:day-cloudy" 
    }
    
    console.log(weatherConditionMap[searchTerm]);
    
    const svg = Iconify.renderSVG(weatherConditionMap[searchTerm], {
        height: 120,
        width: 120
    });   
    
    if (svg) {
        weatherConditionImage.appendChild(svg);
    } else {
        console.warn("Iconfiy failed to render SVG");
    }
}

export const displayData = (dataObject) => { 
    cityName.textContent = dataObject.cityName;
    fullLocationName.textContent = dataObject.fullLocationName;
    currentTemperature.textContent = `Current Temperature: ${dataObject.currentTemperature}\u00B0`;
    currentHigh.textContent = `High: ${dataObject.currentHigh}\u00B0`;
    currentLow.textContent = `Low: ${dataObject.currentLow}\u00B0`;
    currentConditions.textContent = dataObject.currentConditions;   
    bigTemperature.textContent = `${dataObject.roundedCurrentTemperature}\u00B0`;
    generateSVG(dataObject.currentConditions);
}

