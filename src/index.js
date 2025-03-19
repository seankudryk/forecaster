import { getData } from './app-logic.js';
import { displayData } from './display.js';

const submitButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#search-input");

submitButton.addEventListener("click", (event) => {
    //prevent default submit conditions from firing when the button is clicked so we can do our own event handling
    event.preventDefault();

    //call getData, passing the current .value of the searchInput element as argumengetData(searchInput.value);
    const requestData = getData(searchInput.value);

    requestData.then(response => console.log(response));

    requestData.then(response => displayData(response));

    //reset input value back to nothing
    searchInput.value = "";
});
