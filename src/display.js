import Iconify from '@iconify/iconify';

const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");
const bigTemperature = document.querySelector("#big-temperature");

const generateSVG = (weatherCondition) => {

    let searchTerm = weatherCondition.toLowerCase();
    console.log(searchTerm);

    const weatherConditionMap = {
        clear: "wi:day-sunny",
        overcast: "wi:day-cloudy",
        partiallyCloudy: "wi:day-sunny-overcast" 
    }

    console.log(weatherConditionMap.clear);

    const svg = Iconify.renderSVG("wi:day-sunny", {
        height: 180,
        width: 180
    });   
    
    if (svg) {
        document.body.appendChild(svg);
    } else {
        console.warn("Iconfiy failed to render SVG");
    }
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

