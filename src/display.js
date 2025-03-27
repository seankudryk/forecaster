import ClearIcon from './icons/wi-day-sunny.svg';
import OvercastIcon from './icons/wi-cloudy.svg';
import PartiallyCloudy from './icons/wi-day-cloudy.svg';


const cityName = document.querySelector("#city-name");
const fullLocationName = document.querySelector("#full-location-name");
const currentTemperature = document.querySelector("#current-temperature");
const currentHigh = document.querySelector("#current-high");
const currentLow = document.querySelector("#current-low");
const currentConditions = document.querySelector("#current-conditions");
const bigTemperature = document.querySelector("#big-temperature");

const styleContainer = document.querySelector("#style-container");

const generateSVG = (weatherCondition) => {
    const weatherConditionImage = document.querySelector("#weather-condition-image");

    if (weatherConditionImage) {
        styleContainer.removeChild(weatherConditionImage);
    }

    let searchTerm = weatherCondition.replace(/\s+/g, "").toLowerCase();
    console.log(searchTerm);

    const weatherIconMap = {
        clear: ClearIcon,
        overcast: OvercastIcon,
        partiallycloudy: PartiallyCloudy,
    };

    if (!weatherIconMap[searchTerm]) {
        console.warn("No valid SVG for the current weather condition");
    } else {
        const weatherImg = document.createElement("img");
        weatherImg.src = weatherIconMap[searchTerm];
        weatherImg.id = "weather-condition-image";
        
        styleContainer.appendChild(weatherImg);
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

